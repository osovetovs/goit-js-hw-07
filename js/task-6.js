function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreate);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onCreate() {
  const amount = Number(refs.input.value.trim());
  if (!Number.isInteger(amount) || amount < 1 || amount > 100) return;

  destroyBoxes();
  createBoxes(amount);
  refs.input.value = '';
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.borderRadius = '4px';
    box.style.margin = '8px';
    fragment.appendChild(box);
    size += 10;
  }

  refs.boxes.style.display = 'flex';
  refs.boxes.style.flexWrap = 'wrap';
  refs.boxes.appendChild(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
