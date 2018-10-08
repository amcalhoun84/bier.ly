'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;


var BeerSchema = new Schema({
  _id: {
    type: String,
    required: 'Please give a short name, i.e, laguIPA or hein.'
    //unique: true
  },
  name: {
    type: String,
    require: 'Please give it\'s proper name. I.e, \'Bud Light\', \'Heinikein\', \'Lagunitas Lil\' Sumthin\' Sumthin\'.',
    unique: true
  },

  brewery: {
    type: String,
  },

  origin: {
    type: String,
    required: 'Please give us the country, region, or state of origin.'
  },

  beer_type: {
    type: String,
    enum: [
      'Ale',
      'Lager',
      'Stout',
      'Pilsner',
      'Pale Ale',
      'India Pale Ale',
      'Session IPA',
      'Witbier',
      'Porter',
      'Imperial Porter',
      'Hefeweizen',
      'Dunkelweizen',
      'Roggenweizen',
      'Bitter',
      'Bock',
      'Extra Special Bitter',
      'Wee Heavy',
      'Brown Ale',
      'Kellerbier',
      'Pale Lager',
      'Mild Ale',
      'Pale Mild Ale',
      'Bourbon Aged Brown Ale',
      'Marzen',
      'Lambec',
      'Helles',
      'Barleywine',
      'Old Ale',
      'Schwarzbier',
      'Flanders',
      'Saison',
      'Tripel',
      'Koelsch',
      'Cream Ale',
      'Dubbel',
      'Amber Ale',
      'Gueuze',
      'Cider',
      'Doppelbock',
      'Altbier',
      'Gose',
      'American Lager',
      'Vienna Lager',
      'American Amber',
      'Helles Bock',
      'Scotch Ale',
      'Trappist',
      'Dortmunder',
      'Rye Beer',
      'Rauchbier',
      'Quadrupel',
      'Kreik',
      'Guard Beer',
      'Berlinerweisse',
      'Irish Stout',
      'Canadian Lager',
      'Seasonal',
      'Steam Beer',
      'Framboise',
      'Irish Red',
      'Sour'
    ],
    required: 'Please specify a type of beer. Thank you.'
    //default: 'Lager'
  },
  notes: {
    type: [String],
    enum: ['Roasted',
      'Bready',
      'Bitter',
      'Banana',
      'Sweet',
      'Spicy',
      'Caramel',
      'Dry',
      'Butterscotch',
      'Floral',
      'Hoppy',
      'Skunky',
      'Warm',
      'Jammy',
      'Mineral',
      'Toffee',
      'Coffee',
      'Malty',
      'Tart',
      'Subtle',
      'Woody',
      'Nutty',
      'Earthy',
      'Peaty',
      'Sulfuric',
      'Zesty',
      'Young']
  },
  intensity: {
    type: [String],
    enum: [
      'Assertive',
      'Accessible',
      'Bold',
      'Astringent',
      'Balanced',
      'Robust',
      'Complex',
      'Full-Bodied',
      'Smooth',
      'Metallic',
      'Harmonious',
      'Mellow',
      'Harsh',
      'Complex',
      'Refined',
      'Smooth',
      'Mild',
      'Hearty',
      'Intense'
    ]
  },

  description: {
    type: String,
    required: 'Sounds delicious, but you need to describe it a bit!'
  },
  // implied - pairs with food-type.
  pairs_with: {
    type: [String],
    enum: ['Red Meat',
      'Pork',
      'Cured Meat',
      'Egg',
      'Poultry',
      'Game',
      'White Pasta',
      'Red Pasta',
      'White Fish',
      'Dark Fish',
      'Shellfish',
      'Mollusk',
      'Tropical Fruit',
      'Citrus',
      'Stone Fruit',
      'Fruit',
      'Crudite',
      'Hard Cheese',
      'Pungent Cheese',
      'Soft Cheese',
      'Tuber',
      'Sweet Starch',
      'Mushroom',
      'Legumes',
      'Sushi',
      'Spicy',
      'Sweet',
      'Chocolate',
      'Baking Spice']
  }
});

module.exports = mongoose.model('Beer', BeerSchema);
