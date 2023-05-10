//set global variables
const container = document.querySelector('#container');
let size = 100;
generateGrid();

function generateGrid() {
  let fragment = new DocumentFragment()

  for (let i = 0; i < size; i++) {
    let yAxis = document.createElement('div');
    yAxis.classList.add('grid');
    yAxis.setAttribute('style', 'width: 500px; display: flex; flex-direction: row;');
    yAxis.style.height = 500 / size + 'px';
    for (let j = 0; j < size; j++) {
      let xAxis = document.createElement('div');
      xAxis.classList.add('x-axis');
      xAxis.style.height = 500 / size + 'px';
      xAxis.style.width = 500 / size + 'px';
      yAxis.appendChild(xAxis);
    }
    fragment.appendChild(yAxis);
  }

  container.appendChild(fragment);
  mouseHover();
}

function mouseHover() {
const hover = document.querySelectorAll('.x-axis');
hover.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.classList.toggle ('moused');
  });
});
}

function gridClear() {
  const clearGrid = document.querySelectorAll('.grid');
  console.log('test')
  clearGrid.forEach((cell) => {
    while (cell.firstChild) {
      cell.removeChild(cell.lastChild)
    }
    container.removeChild(cell);
    
  })
}

const resize = document.getElementById('resize');
resize.addEventListener('click', () => {
  gridClear();
  size = window.prompt("Please enter grid dimension");
  if (Number(size) > 100 || size == NaN) {
    size = 100;
  } else if (Number(size) < 0) {
    size = 10;
  }
  generateGrid();
})
