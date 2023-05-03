//set global variables
const container = document.querySelector('#container');
let size = 100;

//function generateGrid() {
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
//}

const hover = document.querySelectorAll('.x-axis');
hover.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.classList.toggle ('moused');
  })
});

const resize = document.getElementById('resize');
resize.addEventListener('click', () => {
  //size = window.prompt("Please enter grid dimension");
  gridClear
  console.log('test');
})

function gridClear() {
  const clearCell = document.querySelectorAll('.x-axis');
  const clearGrid = document.querySelectorAll('.grid');
  clearCell.forEach((cell) => {
    clearGrid.removeChild(cell);
  })
  clearGrid.forEach((cell) => {
    container.removeChild(cell);
  })
}