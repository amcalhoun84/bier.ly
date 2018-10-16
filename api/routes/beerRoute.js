'use strict'

const mongoose = require('mongoose'),
  Beer = require('../model/beerSchema'),
  Food = require('../model/foodSchema'),
  ErrHandle = require('./routeErrorHandlers');

exports.list_beers = (req, res) => {
  Beer.find({}, (err, beer) => {
    if (err) ErrHandle.errorEncountered(err);
    res.json(beer);
  });
};

exports.create_beer = (req, res) => {
  var new_beer = new Beer(req.body);
  new_beer.save((err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    res.json(beer);
  });
};

exports.get_beer_by_id = (req, res) => {
  Beer.findById({ _id: req.params.beerId }, (err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    res.json(beer);
  });
};

exports.get_beer_by_name = (req, res) => {
  Beer.find({ 'name': { '$regex': req.params.beerName, '$options': '$i' } }, (err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    res.json(beer);
  });
};

exports.update_beer_by_id = (req, res) => {
  Beer.findByIdAndUpdate(req.params.beerId, req.body, { new: true }, (err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    res.json(beer);
  });
};

exports.update_beer_by_name = (req, res) => {
  Beer.findOneAndUpdate(req.params.beerName, req.body, { new: true }, (err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    res.json(beer);
  });
};

exports.beer_pairs_with_food = (req, res) => {
  console.log(req.params.beerType);
  Beer.find({ 'beer_type': req.params.beerType }, (err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    Food.find({ 'pairs_with': req.params.beerType }, (err, food) => {
      if (food) console.log(food)
      res.json(food);
    });
  });

};

exports.delete_beer_by_id = (req, res) => {
  Beer.remove({ _id: req.params.beerId }, (err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    res.json(beer);
  });
};

exports.delete_beer_by_name = (req, res) => {
  Beer.remove({ 'name': req.params.beerId }, (err, beer) => {
    if (err) ErrHandle.errorEncountered(res, err);
    res.json(beer);
  });
};
