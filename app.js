const img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
const cover = document.querySelector('.cover');
let count = img.length;

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}
function randomInt(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}
function init() {
  shuffle(img);
  for (let i = 0; i < img.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.background = `url('./img/${img[i]}')`;
    card.style.backgroundSize = 'cover';
    card.style.transform = `rotate(${randomInt(-15, 15)}deg)`;
    cover.appendChild(card);
  }
}
init();

cover.addEventListener('click', (e) => {
  if (e.target.classList.contains('card')) {
    e.target.remove();
    count--;
    if (count == 0) {
      init();
      count = img.length;
    }
  }
});
