const xmlns = 'http://www.w3.org/2000/svg';
const xlinkns = 'http://www.w3.org/1999/xlink';

const inputBox = document.querySelector('.todo__input');
const ulElement = document.querySelector('.todo__items-container');

const addItem = (itemText) => {
  // TODO: implement
  console.log('test')
};

const addItemFromInput = () => {
  // TODO: implement
// check if text is empty 
if (inputBox.value.trim() === '') {
    return 
}
console.log(inputBox.value)
const liElement = document.createElement('li');
liElement.textContent = inputBox.value; // Replace with the text you want in the li element
ulElement.appendChild(liElement);

// create a li element 
// add text to it 

};

addEventListener('load', () => {
  addItem('Read the description');
  addItem('Solve the task');
  addItem('Submit the solution');

  document.querySelector('.todo__input').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addItemFromInput();
    }
  });

  document
    .querySelector('.todo__create')
    .addEventListener('click', () => addItemFromInput());
});

