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
let jsBoxes = [];
let timerCount = 0;
let intervalId = null;

let checkWinCondition = () => {
  // iterate through my jsBoxes array and check if all isPink = true
  for (let i = 0; i < jsBoxes.length; i++) {
    // return false if even one is not pink
    if (jsBoxes[i].isPink == false) {
      return false;
    }
  }
  // return true if allare pink
  return true;
}

let handleWin = () => {
  // Make each box unclickable
  for (let i = 0; i < jsBoxes.length; i++) {
    jsBoxes[i].domElement.removeEventListener('click', handleClick);
    jsBoxes[i].isPink = false;
  }

  // stop the timer
  clearInterval(intervalId);

  // add a message
  document.querySelector('#box-message').textContent = 'All boxes are pink!'
}

let handleClick = (event) => {
  // jsBoxes[i] = {
  //    domElement: HTMLnode,
  //    isPink: BOOLEAN
  //  }
  
  // get the index from the DOM so I can reference the JS representation
  let index = event.target.dataset.index;
  let box = jsBoxes[index];

  if (box.isPink == true) {
    box.isPink = false;
    box.domElement.classList.remove('hotpink');
  } else {
    box.isPink = true;
    box.domElement.classList.add('hotpink');
  }

  let didWin = checkWinCondition();

  // check winCondition
  if (didWin == true) {
    console.log('All boxes are piiink!')
    handleWin();
  } else {
    console.log('make more pink boxes!')
  }
}

let handleInterval = () => {
  // update the game-time seconds
  timerCount = timerCount + 1;

  // represent that in the dom
  document.querySelector('#game-time').textContent = timerCount;
}

let initalizeGame = () => {
  document.querySelector('#box-message').textContent = ''

  // reset js and dom visual of timer
  timerCount = 0;
  document.querySelector('#game-time').textContent = 0;
  clearInterval(intervalId);
  
  // start the timer
  intervalId = setInterval(handleInterval, 1 * 1000);

  for (let i = 0; i < boxes.length; i++) {
    // create/add js representation
    jsBoxes[i] = {
      domElement: boxes[i],
      isPink: false
    }
  
    // ensure that all boxes are not hotpink
    boxes[i].classList.remove('hotpink');
  
    // Adding event listenter
    boxes[i].addEventListener('click', handleClick)
  }
}

// setup/initialization
initalizeGame();

document.querySelector('#box-reset').addEventListener('click', initalizeGame);

// setTimeout
// match things --> know how to use arrays and objects
