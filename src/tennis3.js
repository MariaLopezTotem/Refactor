"use strict";
const _ = require('lodash');

function getScore(p1, p2) {
  let score;
  let player1 = "player1";
  let player2 = "player2";
  if ((p1 < 4) && (p2 < 4) && (p1 + p2 < 6)) {
    let puntuations = ["Love", "Fifteen", "Thirty", "Forty"];
    score = puntuations[p1];
    return _.isEqual(p1, p2) ? `${score}-All`: `${score}-${puntuations[p2]}`
  } else {
    if (_.isEqual(p1, p2)) {
      return process.env.deuce;
    }
    score = p1 > p2 ? player1 : player2;
    return _.isEqual((p1 - p2) * (p1 - p2), 1) ? `Advantage ${score}` : `Win for ${score}`;
  }
}

module.exports = getScore;
