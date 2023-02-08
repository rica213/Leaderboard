import './style.css';
import { refreshBtn, scoresContainer, addNewScoreBtn, name, score } from './modules/htmlElements';
import displayScores from './modules/display-scores.js';
import addScore from './modules/add-score.js';

refreshBtn.addEventListener('click', () => {
  scoresContainer.innerHTML = '';
  displayScores().then((obj) => {
    const scores = obj['result'];
    scores.forEach(element => {
      const li = document.createElement('li');
      li.innerHTML = `${element.user} : ${element.score}`;
      scoresContainer.appendChild(li);
    });
  });
});

addNewScoreBtn.addEventListener('click', (e) => {
  if(name.value==='' || score.value === ''){
    e.preventDefault();
  } else {
    addScore(name.value, score.value);
  }
});