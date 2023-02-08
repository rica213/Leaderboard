import './style.css';
import { refreshBtn, scoresContainer } from './modules/htmlElements';
import displayScores from './modules/display-scores';

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