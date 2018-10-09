import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; // Not used here, so it throws errors.
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      _id: null,    // I really need to figure out what to do with this.
      name: '',
      brewery: '',
      origin: '',
      beer_type: '',
      notes: [],
      intensity: [],
      description: '',
      pairs_with: []
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { _id, name, brewery, origin, beer_type, notes, intensity, description, pairs_with } = this.state;

    let _new_id = name.trim();
    _new_id = _new_id.replace(/\s/g, '');

    this.setState({ _id: _new_id });

    axios.post('/api/beer'), { _id, name, brewery, origin, beer_type, notes, intensity, description, pairs_with }
      .then((result) => {
        this.props.drinks.push;
      });
  }

  render() {
    const { name, brewery, origin, beer_type, notes, intensity, description, pairs_with } = this.state;
    return (
      <div>
        <h3>ADD BEER</h3>
        <h4><Link to='/'>Return to Beers</Link></h4>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Beer Name" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="brewery" value={brewery} onChange={this.onChange} placeholder="Brewery Name" />
          </div>
          <div class="form-group">
            <select class="form-control" name="Beer Type" value={beer_type} onChange={this.onChange}>
              <option>Select a beer type...</option>
              <option value='Ale'>Ale</option>
              <option value='Lager'>Lager</option>
              <option value='Stout'>Stout</option>
              <option value='Pilsner'>Pilsner</option>
              <option value='Pale Ale'>Pale Ale</option>
              <option value='India Pale Ale'>India Pale Ale</option>
              <option value='Session IPA'>Session IPA</option>
              <option value='Witbier'>Witber</option>
              <option value='Porter'>Porter</option>
              <option value='Imperial Porter'>Imperial Porter</option>
              <option value='Hefeweizen'>Hefewizen</option>
              <option value='Dunkelweizen'>Dunkelweizen</option>
              <option value='Roggenweizen'>Roggenweizen</option>
              <option value='Bitter'>Bitter</option>
              <option value='Bock'>Bock</option>
              <option value='Extra Special Bitter'>Extra Special Bitter</option>
              <option value='Wee Heavy'>Wee Heavy</option>
              <option value='Brown Ale'>Brown Ale</option>
              <option value='Kellerbier'>Kellerbier</option>
              <option value='Pale Lager'>Pale Lager</option>
              <option value='Mild Ale'>Mild Ale</option>
              <option value='Pale Mild Ale'>Pale Mild Ale</option>
              <option value='Bourbon Aged Brown Ale'>Bourbon Aged Brown Ale</option>
              <option value='Marzen'>Märzen</option>
              <option value='Lambec'>Lamber</option>
              <option value='Helles'>Helles</option>
              <option value='Barleywine'>Barley Wine</option>
              <option value='Old Ale'>Old Ale</option>
              <option value='Schwarzbier'>Schwarzbier</option>
              <option value='Flanders'>Flanders</option>
              <option value='Saison'>Saison</option>
              <option value='Tripel'>Tripel</option>
              <option value='Koelsch'>Koelsch</option>
              <option value='Cream Ale'>Cream Ale</option>
              <option value='Dubbel'>Dubbel</option>
              <option value='Amber Ale'>Amber Ale</option>
              <option value='Gueuze'>Gueuze</option>
              <option value='Cider'>Cider</option>
              <option value='Doppelbock'>Doppelbock</option>
              <option value='Altbier'>Altbier</option>
              <option value='Gose'>Gose</option>
              <option value='American Lager'>American Lager</option>
              <option value='Vienna Lager'>Vienna Lager</option>
              <option value='American Amber'>American Amber</option>
              <option value='Helles Bock'>Helles Bock</option>
              <option value='Scotch Ale'>Scotch Ale</option>
              <option value='Trappist'>Trappist</option>
              <option value='Dortmunder'>Dortmunder</option>
              <option value='Rye Beer'>Rye Beer</option>
              <option value='Rauchbier'>Rauchbier</option>
              <option value='Quadrupel'>Quadrupel</option>
              <option value='Kreik'>Kreik</option>
              <option value='Guard Beer'>Guard Beer</option>
              <option value='Berlinerweisse'>Berlinerweisse</option>
              <option value='Irish Stout'>Irish Stout</option>
              <option value='Canadian Lager'>Canadian Lager</option>
              <option value='Seasonal'>Seasonal</option>
              <option value='Steam Beer'>Steam Beer</option>
              <option value='Framboise'>Framboise</option>
              <option value='Irish Red'>Irish Red</option>
              <option value='Sour'>Sour</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control" name="notes" value={notes} onChange={this.onChange}>
              <option>Select notes...</option> {/* integrate select multiple */}
              <option value='Roasted'>Roasted</option>
              <option value='Bready'>Bready</option>
              <option value='Bitter'>Bitter</option>
              <option value='Banana'>Banana</option>
              <option value='Sweet'>Sweet</option>
              <option value='Spicy'>Spicy</option>
              <option value='Caramel'>Caramel</option>
              <option value='Dry'>Dry</option>
              <option value='Butterscotch'>Butterscotch</option>
              <option value='Floral'>Floral</option>
              <option value='Hoppy'>Hoppy</option>
              <option value='Skunky'>Skunky</option>
              <option value='Warm'>Warm</option>
              <option value='Jammy'>Jammy</option>
              <option value='Mineral'>Mineral</option>
              <option value='Toffee'>Toffee</option>
              <option value='Coffee'>Coffee</option>
              <option value='Malty'>Malty</option>
              <option value='Tart'>Tart</option>
              <option value='Subtle'>Subtle</option>
              <option value='Woody'>Woody</option>
              <option value='Nutty'>Nutty</option>
              <option value='Earthy'>Earthy</option>
              <option value='Sweet'>Sweet</option>
              <option value='Peaty'>Peaty</option>
              <option value='Sulfuric'>Sulfuric</option>
              <option value='Zesty'>Zesty</option>
              <option value='Young'>Young</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control" name="intensity" value={intensity} onChange={this.onChange} placeholder="Intensity Types">
              <option value=''>Intensity Notes...</option>
              <option value='Assertive'>Assertive</option>
              <option value='Accessible'>Accessible</option>
              <option value='Bold'>Bold</option>
              <option value='Astringent'>Astringent</option>
              <option value='Balanced'>Balanced</option>
              <option value='Robust'>Robust</option>
              <option value='Complex'>Complex</option>
              <option value='Full-Bodied'>Full-Bodied</option>
              <option value='Smooth'>Smooth</option>
              <option value='Metallic'>Metallic</option>
              <option value='Harmonious'>Harmonious</option>
              <option value='Mellow'>Mellow</option>
              <option value='Harsh'>Harsh</option>
              <option value='Complex'>Complex</option>
              <option value='Refined'>Refined</option>
              <option value='Smooth'>Smooth</option>
              <option value='Mild'>Mild</option>
              <option value='Hearty'>Hearty</option>
              <option value='Intense'>Intense</option>
            </select>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="Description" value={beer_type} onChange={this.onChange}>
            </textarea>
          </div>
          <div class="form-group">
            <select class="form-control" name="intensity" value={intensity} onChange={this.onChange} placeholder="Pairing">
              <option value=''></option>
              <option value='Red Meat'>Red Meat</option>
              <option value='Pork'>Pork</option>
              <option value='Cured Meat'>Cured Meat</option>
              <option value='Egg'>Egg</option>
              <option value='Poultry'>Poultry</option>
              <option value='Game'>Game</option>
              <option value='White Pasta'>White Pasta</option>
              <option value='Red Pasta'>Red Pasta</option>
              <option value='White Fish'>White Fish</option>
              <option value='Dark Fish'>Dark Fish</option>
              <option value='Shellfish'>Shellfish</option>
              <option value='Mollusk'>Mollusk</option>
              <option value='Tropical Fruit'>Tropical Fruit</option>
              <option value='Citrus'>Citrus</option>
              <option value='Stone Fruit'>Stone Fruit</option>
              <option value='Fruit'>Fruit</option>
              <option value='Crudite'>Crudite</option>
              <option value='Hard Cheese'>Hard Cheese</option>
              <option value='Pungent Cheese'>Pungent Cheese</option>
              <option value='Soft Cheese'>Soft Cheese</option>
              <option value='Tuber'>Tuber</option>
              <option value='Sweet Starch'>Sweet Starch</option>
              <option value='Mushroom'>Mushroom</option>
              <option value='Legumes'>Legumes</option>
              <option value='Sushi'>Sushi</option>
              <option value='Spicy'>Spicy</option>
              <option value='Sweet'>Sweet</option>
              <option value='Chocolate'>Chocolate</option>
              <option value='Baking Spice'>Baking Spice</option>
            </select>
          </div>
        </form >
      </div >

    );

  }

}

export default Create;
