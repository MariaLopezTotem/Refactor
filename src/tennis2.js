"use strict";
const _ = require('lodash');


function getScore(P1point, P2point) {
  let score = "";
  let P1res;
  let P2res;
  score = evaluatePlayerPoint1(P1point, P2point,score);
  if (P1point > 0 && _.isEqual(P2point, 0)) {
    P1res = getPlayerScore(P1point);   
    P2res = process.env.Love;
    score = `${P1res}-${P2res}`;
  }
  if (P2point > 0 && _.isEqual(P1point, 0)) {
    P2res =getPlayerScore(P2point);
    P1res = process.env.Love;
    score = `${P1res}-${P2res}`;
  }

  if ((P1point > P2point) && (P1point < 4)) {//TODO A FUNCTION
    if (_.isEqual(P1point, 2)) {
      P1res = process.env.Thirty;
    }
    if (_.isEqual(P1point, 3)) {
      P1res = process.env.Forty;
    }
    if (_.isEqual(P2point, 1)) {
      P2res = process.env.Fifteen;
    }
    if (_.isEqual(P2point, 2)) {
      P2res = process.env.Thirty;
    }
    score = `${P1res}-${P2res}`;
  }

  if ((P2point > P1point) && (P2point < 4)) { //TODO A FUNCTION
    if (_.isEqual(P2point, 2)) {
      P2res = process.env.Thirty;
    }
    if (_.isEqual(P2point, 3)) {
      P2res = process.env.Forty;
    }
    if (_.isEqual(P1point, 1)) {
      P1res = process.env.Fifteen;
    }
    if (_.isEqual(P1point, 2)) {
      P1res = process.env.Thirty;
    }
    score =`${P1res}-${P2res}`;
  }

  if ((P1point > P2point) && (P2point >= 3)) {
    score = process.env.advantagePlayer1;
  }

  if (P2point > P1point && P1point >= 3) {
    score = process.env.advantagePlayer2;
  }

  if (P1point >= 4 && P2point >= 0 && P1point - P2point >= 2) {
    score = process.env.winForPlayer1;
  }
  if (P2point >= 4 && P1point >= 0 && P2point - P1point >= 2) {
    score = process.env.winForPlayer2;
  }
  return score;
}

function evaluatePlayerPoint1(P1point, P2point, score){
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
      return score += process.env.Minus_All;
    }else if(P1point > 2){
      return score = process.env.deuce;
    }    
  }
  return score;
}

function getPlayerScore(point){  
  if (_.isEqual(point, 1)) {
    return process.env.Fifteen;
  } else if (_.isEqual(point, 2)) {
    return  process.env.Thirty;
  } else if (_.isEqual(point, 3)) {
    return process.env.Forty;
  }
}



module.exports = getScore;
