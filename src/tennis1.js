"use strict";
const _ = require('lodash');

function getScore(m_score1, m_score2) {
  let score = "";
  let tempScore = 0;
  if (_.isEqual(m_score1, m_score2)) {
    switch (m_score1) {
      case 0:
        score = process.env.loveAll;
        break;
      case 1:
        score = process.env.fifteenAll;
        break;
      case 2:
        score = process.env.thirtyAll;
        break;
      default:
        score = process.env.deuce;
        break;
    }
  } else if (m_score1 >= 4 || m_score2 >= 4) {
    let minusResult = m_score1 - m_score2;  

    if (_.isEqual(minusResult, 1)) {
      score = process.env.advantagePlayer1;
    } else if (_.isEqual(minusResult, -1)) {
      score = process.env.advantagePlayer2;
    } else if (minusResult >= 2) {
      score = process.env.winForPlayer1;
    } else {
      score = process.env.winForPlayer2;
    }
  } else {
    for (let i = 1; i < 3; i++) {
      if (_.isEqual(i, 1)) {
        tempScore = m_score1;
      } else {
        score += "-";
        tempScore = m_score2;
      }
      switch (tempScore) {
        case 0:
          score += process.env.Love;
          break;
        case 1:
          score += process.env.Fifteen;
          break;
        case 2:
          score += process.env.Thirty;
          break;
        case 3:
          score += process.env.Forty;
          break;
      }
    }
  }
  return score;
}

module.exports = getScore;
