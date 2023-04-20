//set global variables
const container = document.querySelector('#container');
let x = 16;
let y = 16;

//function generateGrid() {
  let fragment = new DocumentFragment()

  for (let i = 0; i < y; i++) {
    let yAxis = document.createElement('div');
    //yAxis.classList.add('grid');
    yAxis.setAttribute('style', 'height: 10px; width: 200px; display: flex; flex-direction: row;');
    for (let j = 0; j < x; j++) {
      let xAxis = document.createElement('div');
      xAxis.classList.add('grid');
      xAxis.setAttribute('style', 'height: 10px; width: 10px');
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
