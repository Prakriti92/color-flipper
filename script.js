const colorDisplay = document.getElementById('colorDisplay');
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', function() {
  const randomColor = generateRandomColor();
  colorDisplay.textContent = randomColor;
  colorDisplay.style.backgroundColor = randomColor;
});

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
