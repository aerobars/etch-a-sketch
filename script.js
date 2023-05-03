//set global variables
const container = document.querySelector('#container');
let x = 100;
let y = 100;

//function generateGrid() {
  let fragment = new DocumentFragment()

  for (let i = 0; i < y; i++) {
    let yAxis = document.createElement('div');
    //yAxis.classList.add('grid');
    yAxis.setAttribute('style', 'width: 500px; display: flex; flex-direction: row;');
    yAxis.style.height = 500 / y + 'px';
    for (let j = 0; j < x; j++) {
      let xAxis = document.createElement('div');
      xAxis.classList.add('grid');
      xAxis.style.height = 500 / y + 'px';
      xAxis.style.width = 500 / x + 'px';
      yAxis.appendChild(xAxis);
    }
    fragment.appendChild(yAxis);
  }

  container.appendChild(fragment);
//}

const hover = document.querySelectorAll('.grid');
hover.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.classList.toggle ('moused');
  })
});

const resize = document.querySelector('#resize');
resize.addEventListener()