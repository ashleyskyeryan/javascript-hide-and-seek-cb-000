function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const divs = document.querySelectorAll('#grand-node div');
  for (let i = 0; i < list.divs; i++) {
    divs[i].innerHTML = 
  }
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll(ul.ranked-list 'li');
  for (let i = 0; i < ranks.length; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
}
}
