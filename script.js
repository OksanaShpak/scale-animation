const image = document.querySelector('.img');

const limits = {
  start: 100,
  end: 300,
  width: {
    min: 0,
    max: 500,
  },
  height: {
    min: 0,
    max: 680,
  },
  size: {
    min: 500,
    max: 800,
  },
  x: {
    min: -200,
    max: 0,
  },
  y: {
    min: -250,
    max: 0,
  }
}
updateImage();
window.onscroll = updateImage;

function updateImage() {
  const scroll = window.scrollY;
  const { start, end, width, height, size, x, y } = limits;
  const portion = Math.min(Math.max(scroll - start, 0) / (end - start), 1);
  const widthValue = width.min + portion * (width.max - width.min);
  const heightValue = height.min + portion * (height.max - height.min);
  const sizeValue = size.min + (1 - portion) * (size.max - size.min);
  const xValue = x.min + portion * (x.max - x.min);
  const yValue = y.min + portion * (y.max - y.min);

  image.style.width = `${widthValue}px`;
  image.style.height = `${heightValue}px`;
  image.style.backgroundSize = `${sizeValue}px`;
  image.style.backgroundPosition = `${xValue}px ${yValue}px`;
}