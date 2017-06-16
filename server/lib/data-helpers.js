"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, callback);
    },//close for saveTweets
    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection('tweets').find().toArray((callback));
    }//close for get tweets func
  };//return close
}//mod.exp close
      // const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      // callback(null, db.collections('tweets').find(sortNewestFirst));
