function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML =
  }
}

function increaseRankBy() {
  const ranks = document.querySelectorAll(ul.ranked-list 'li');
  for (let i = 0; i < ranks.length; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
}
}
