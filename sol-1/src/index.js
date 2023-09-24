// import './styles.css';

(() => {
  function isValidNumber(text) {
    // Use a regular expression to check if the text is a valid number
    const numberPattern = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
    return numberPattern.test(text);
}
  function convertCelToFarheit(value){
    return isValidNumber(value)? ((value *9/5)+32).toFixed(4) : "";
  }
  function convertFarToCel(value){
    return isValidNumber(value)? ((value *9/5)+32).toFixed(4) : "";
  }
  document
  .querySelector('#tmp-Cel')
  .addEventListener('keyup', (event) => {
    tmp =convertCelToFarheit(event.target.value);
    document.querySelector('#tmp-Far').value = tmp 
  });

  document
  .querySelector('#tmp-Far')
  .addEventListener('keyup', (event) => {
    tmp =convertFarToCel(event.target.value);
    document.querySelector('#tmp-Cel').value = tmp 
  });
})();
