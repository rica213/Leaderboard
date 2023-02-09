const createDisplay = (obj, container) => {
  const scores = obj.result;
  scores.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user} : ${element.score}`;
    container.appendChild(li);
  });
};

export default createDisplay;