// JS variable to track the count number
let countNumber = 0;

// Variables to access our DOM nodes
let domCounter = document.querySelector('.counter');
let addButton = document.querySelector('#add-button');
let resetButton = document.querySelector('#reset-button');

// Functions that will run when someone clicks a button 
let handleAddClick = event => {
  // add one to the count number
  countNumber = countNumber + 1;
  // countNumber += 1
  // countNumber++

  // the-variable-to-change = new-value
  
  // change the text content of the domCounter to match our js variable
  domCounter.textContent = countNumber;

  console.log('You clicked me ' + countNumber + ' times');
}

let handleResetClick = event => {
  // do sth in javascript
  countNumber = 0;

  // reflect that change to the DOM
  domCounter.textContent = countNumber;
}

// Adding the button click functions to the Button Dom nodes
addButton.addEventListener('click', handleAddClick);
resetButton.addEventListener('click', handleResetClick);

// ---------------------------------------
let boxes = document.querySelectorAll('.box');

// iterating over the boxes
for (let i = 0; i < boxes.length; i++) {
  console.log(boxes[i])

  boxes[i].addEventListener('click', (e) => {
    // toggle between hotpink and no color
    // if background is not hotpink, 
      // make it hotpink
    // else
      //  make background ''
    
    // if (boxes[i].style.background != 'hotpink') {
    //   boxes[i].style.background = 'hotpink'
    // } else {
    //   boxes[i].style.background = ''
    // }

    if (boxes[i].classList.contains('hotpink')) {
      boxes[i].classList.remove('hotpink');
    } else {
      boxes[i].classList.add('hotpink');
    }
  })
}