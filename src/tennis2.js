"use strict";
const _ = require('lodash');

function getScore(P1point, P2point) {
  let score = "";

  if (_.isEqual(P1point, P2point)) {
    if(P1point < 3){
      if (_.isEqual(P1point, 0)) {
        score = process.env.Love;
      }
      if (_.isEqual(P1point, 1)) {
        score = process.env.Fifteen;
      }
      if (_.isEqual(P1point, 2)) {
        score = process.env.Thirty;
      }
      score += process.env.Minus_All;
    }else if(P1point > 2){
      score = process.env.deuce;
    }    
  }
  let P1res;
  let P2res;
  if (P1point > 0 && _.isEqual(P2point, 0)) {
    if (_.isEqual(P1point, 1)) {
      P1res = process.env.Fifteen;
    }
    if (_.isEqual(P1point, 2)) {
      P1res = process.env.Thirty;
    }
    if (_.isEqual(P1point, 3)) {
      P1res =  process.env.Forty;
    }
    P2res = process.env.Love;
    score = `${P1res}-${P2res}`;
  }
  if (P2point > 0 && _.isEqual(P1point, 0)) {
    if (_.isEqual(P2point, 1)) {
      P2res = process.env.Fifteen;
    }
    if (_.isEqual(P2point, 2)) {
      P2res = process.env.Thirty;
    }
    if (_.isEqual(P2point, 3)) {
      P2res = process.env.Forty;
    }

    P1res = process.env.Love;
    score = `${P1res}-${P2res}`;
  }

  if (P1point > P2point && P1point < 4) {
    if (P1point === 2) {
      P1res = "Thirty";
    }
    if (P1point === 3) {
      P1res = "Forty";
    }
    if (P2point === 1) {
      P2res = "Fifteen";
    }
    if (P2point === 2) {
      P2res = "Thirty";
    }
    score = P1res + "-" + P2res;
  }
  if (P2point > P1point && P2point < 4) {
    if (P2point === 2) {
      P2res = "Thirty";
    }
    if (P2point === 3) {
      P2res = "Forty";
    }
    if (P1point === 1) {
      P1res = "Fifteen";
    }
    if (P1point === 2) {
      P1res = "Thirty";
    }
    score = P1res + "-" + P2res;
  }

  if (P1point > P2point && P2point >= 3) {
    score = "Advantage player1";
  }

  if (P2point > P1point && P1point >= 3) {
    score = "Advantage player2";
  }

  if (P1point >= 4 && P2point >= 0 && P1point - P2point >= 2) {
    score = "Win for player1";
  }
  if (P2point >= 4 && P1point >= 0 && P2point - P1point >= 2) {
    score = "Win for player2";
  }
  return score;
}

module.exports = getScore;
