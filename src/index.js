import './style.css';
import { refreshBtn, scoresContainer, addNewScoreBtn, name, score } from './modules/htmlElements';
import displayScores from './modules/display-scores.js';
import addScore from './modules/add-score.js';
import init from './modules/init';
import createDisplay from './modules/create-display';

refreshBtn.addEventListener('click', () => {
  init();
  displayScores().then((obj) => {
    return createDisplay(obj, scoresContainer);
  });
});

addNewScoreBtn.addEventListener('click', (e) => {
  if (name.value === '' || score.value === '') {
    e.preventDefault();
  } else {
    addScore(name.value, score.value);
    init();
    displayScores().then((obj) => {
      return createDisplay(obj, scoresContainer);
    });
  }
});