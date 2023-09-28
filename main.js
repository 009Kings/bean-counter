let countNumber = 10;

let domCounter = document.querySelector('.counter');
let addButton = document.querySelector('#add-button');

let handleAddClick = event => {
  // add one to the count number
  // change the text content of the domCounter to match
  console.log('You clicked me!')
}

addButton.addEventListener('click', handleAddClick)
// addButton.addEventListener('click', e => {
//   console.log('beans')
// })

domCounter.textContent = countNumber


// TODO: access addButton
// TODO: create handleAddClick function
// TODO: create increaseCounter function

// accessing dom elements

// affecting dom elements

// click events