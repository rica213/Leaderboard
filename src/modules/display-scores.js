const displayScores = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/u3Ww0HG3SvLdxIYHb1um/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores = await response.json();
  return scores;
};

export default displayScores;