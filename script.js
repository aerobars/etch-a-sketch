//set global variables
const container = document.querySelector('#container');
let x = 16;
let y = 16;


//create a 16x16 grid of square divs using documentFragment approach
//create documentFragment
//nested for loops
//first loop make yAxis number of divs
//set display of each yAxis div to flex
//second loop make xAxis number of divs within each yAxis div
//set xAxis div dimensions (5x5)
//append documentFragment to container

//function generateGride()
  let fragment = new DocumentFragment()

  for (let i = 0; i < y; i++) {
    let yAxis = document.createElement('div');
    yAxis.classList.add('grid');
    yAxis.setAttribute('style', 'height: 10px; width: auto; display: flex; flex-direction: row;');
    for (let j = 0; j < x; j++) {
      let xAxis = document.createElement('div');
      xAxis.classList.add('grid');
      xAxis.setAttribute('style', 'height: 10px; width: 10px');
      yAxis.appendChild(xAxis);
    }
    fragment.appendChild(yAxis);
  }
  container.appendChild(fragment);