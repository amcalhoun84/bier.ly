const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var FoodSchema = new Schema({
  /*   _id: {
      type: String,
      required: 'Please use a shorthand notation'
      //	unique: true
    }, */
  name: {
    type: String,
    required: 'You need to give a valid food name.',
    unique: true
  },

  primary_group: {
    type: String,
    enum: ['Meat',
      'Dairy',
      'Vegetable',
      'Fruit',
      'Starch',
      'Sweets']
  },
  food_type: {
    type: String,
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
      'Baking Spice'
    ]
  },

  pairs_with: {
    type: [String],
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
  }


});

module.exports = mongoose.model('Foods', FoodSchema);
