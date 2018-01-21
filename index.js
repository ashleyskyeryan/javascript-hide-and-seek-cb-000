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
  const ranks = document.getElementByClassName('ranked-list').querySelectorAll('li')
  for (let i = 0; i < ranks.length; i++) {
  new rank = ranks.parseInt()
  rank++
}
}
