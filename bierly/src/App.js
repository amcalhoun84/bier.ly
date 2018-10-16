import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Let\'s try listing beers!',
      beers: []
    };
  }

  componentDidMount() {
    axios.get('/api/beer/')
      .then(res => {
        this.setState({ beers: res.data })
        console.log(res.data);
        console.log(this.state.beers);
      });

  }

  /*   callBierlyAPI = async () => {
      const response = await fetch('/api/beer/');
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }

      return body;
    };
   */
  render() {
    //let { value } = { this.state };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bier.ly</h1>
        </header>
        <p className="App-intro">
          <br />
          This is the fresh start to Bier.ly. Super cool stuff is coming soon!

          <hr />
          <Link to="/create">Add a beer...</Link>

          <h3> Current Beers on Tap </h3>
          <table class="beer_table">
            <thead>
              <tr class="beer_table">
                <th>Name</th>
                <th>Beer Type</th>
                <th>Brewery</th>
                <th>Origin</th>
                <th>Description</th>
                <th>Notes</th>
                <th>Intensity</th>
                <th>Pairs With</th>

              </tr></thead>
            <tbody>
              {this.state.beers.map(beer =>
                <tr>
                  <td class="beer_table">{beer.name}</td>
                  <td class="beer_table">{beer.beer_type}</td>
                  <td class="beer_table">{beer.brewery}</td>
                  <td class="beer_table">{beer.origin}</td>
                  <td class="beer_table">{beer.description}</td>
                  <td class="beer_table">{beer.notes.map(note => <p>{note}</p>)}</td>
                  <td class="beer_table">{beer.intensity.map(intense => <p>{intense}</p>)}</td>
                  <td class="beer_table">{beer.pairs_with.map(pair_with => <p>{pair_with}</p>)}</td>
                </tr>
              )}
            </tbody>
          </table>



        </p>
      </div>
    );
  }
}

export default App;
