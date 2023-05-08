"use strict";
const _ = require('lodash');

const SCORE = {
  loveAll : 'Love-All',
  fifteenAll : 'Fifteen-All',
  thirtyAll : 'Thirty-All',
  deuce : 'Deuce',

  advantagePlayer1 : 'Advantage player1',
  advantagePlayer2 : 'Advantage player2',
  winForPlayer1 : 'Win for player1',
  winForPlayer2 : 'Win for player2'

}

function getScore(m_score1, m_score2) {
  let score = "";
  let tempScore = 0;
  if (_.isEqual(m_score1, m_score2)) {
    switch (m_score1) {
      case 0:
        score = SCORE.loveAll;
        break;
      case 1:
        score = SCORE.fifteenAll;
        break;
      case 2:
        score = SCORE.thirtyAll;
        break;
      default:
        score = SCORE.deuce;
        break;
    }
  } else if (m_score1 >= 4 || m_score2 >= 4) {
    let minusResult = m_score1 - m_score2;
    if (minusResult === 1) {
      score = SCORE.advantagePlayer1;
    } else if (minusResult === -1) {
      score = SCORE.advantagePlayer2;
    } else if (minusResult >= 2) {
      score = SCORE.winForPlayer1;
    } else {
      score = SCORE.winForPlayer2;
    }
  } else {
    for (var i = 1; i < 3; i++) {
      if (i === 1) {
        tempScore = m_score1;
      } else {
        score += "-";
        tempScore = m_score2;
      }
      switch (tempScore) {
        case 0:
          score += "Love";
          break;
        case 1:
          score += "Fifteen";
          break;
        case 2:
          score += "Thirty";
          break;
        case 3:
          score += "Forty";
          break;
      }
    }
  }
  return score;
}

module.exports = getScore;
