import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    axios.get('/api/beer/' + this.props.match.params.name)
      .then(res => {
        this.setState({ beer: res.data });
        console.log(this.state.beer);
      });
  }

  delete(id) {
    console.log(id);
    axios.delete('/api/beer/' + name)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.beer.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Beer List</Link></h4>
            <dl>
              <dt>Brewery:</dt>
              <dd>{this.state.beer.brewery}</dd>
              <dt>Origin:</dt>
              <dd>{this.state.beer.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.beer.description}</dd>
              <dt>Pairs With:</dt>
              <dd>{this.state.beer.pairs_with}</dd>
              <dt>Notes:</dt>
              <dd>{this.state.beer.notes}</dd>
              <dt>Intensity:</dt>
              <dd>{this.state.beer.intensity}</dd>
            </dl>
            <Link to={`/edit/${this.state.beer.name}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.beer._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
