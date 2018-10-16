'use strict';

const express = require('express');

module.exports = (app) => {
  const beerRoute = require('./routes/beerRoute'),
    userRoute = require('./routes/userRoute'),
    foodRoute = require('./routes/foodRoute');

  // API Hooks for beers

  app.get('/api/backendCheck', (req, res) => {
    res.send({ express: 'Don\'t cry wolf, but definitely check it out! Express is connected to REACT!' });
  });

  app.route('/api/beer/')
    .get(beerRoute.list_beers)
    .post(beerRoute.create_beer);

  app.route('/api/beer/:beerId')
    .get(beerRoute.get_beer_by_id)
    .put(beerRoute.update_beer_by_id)
    .delete(beerRoute.delete_beer_by_id);

  app.route('/api/beer/name/:beerName')
    .get(beerRoute.get_beer_by_name)
    .put(beerRoute.update_beer_by_name)
    .delete(beerRoute.delete_beer_by_name);

  app.route('/api/beer/match/:beerType')
    .get(beerRoute.beer_pairs_with_food);


  // API Hooks for food

  app.route('/api/food/')
    .get(foodRoute.list_foods)
    .post(foodRoute.create_food);

  app.route('/api/food/:foodId')
    .get(foodRoute.get_food_by_id)
    .put(foodRoute.update_food_by_id)
    .delete(foodRoute.delete_food_by_id);

  app.route('/api/food/name/:foodName')
    .get(foodRoute.get_food_by_name)
    .put(foodRoute.update_food_by_name)
    .delete(foodRoute.delete_food_by_name);

  app.route('/api/food/matchType/:foodType')
    .get(foodRoute.food_pairs_with_beer_by_type);

  app.route('/api/food/matchName/:foodName')
    .get(foodRoute.food_pairs_with_beer_by_name);

  // API Hooks for Users

  app.route('/api/users/')
    .get(userRoute.list_users)      // When this is in production, this should be deactivated. Otherwise we might have security leaks even with encryption!
    .post(userRoute.create_user);

  app.route('/api/users/:userId')
    .get(userRoute.get_user_by_id)
    .put(userRoute.update_user_by_id)
    .delete(userRoute.delete_user_by_id);

};
