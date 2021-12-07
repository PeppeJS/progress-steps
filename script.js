let progress = document.getElementById('line-progress');
let circles = document.querySelectorAll('.circle');
let prevs = document.getElementById('prev');
let nexts = document.getElementById('next');

let currentActive = 1;

nexts.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prevs.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((value, index) => {
    if (index < currentActive) {
      value.classList.add('active');
    } else {
      value.classList.remove('active');
    }
  });

  let actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prevs.disabled = true;
  } else if (currentActive === circles.length) {
    nexts.disabled = true;
  } else {
    nexts.disabled = false;
    prevs.disabled = false;
  }
}
