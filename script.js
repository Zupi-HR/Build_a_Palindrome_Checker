
const textInput = document.getElementById('text-input');
const checkBTN = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBTN.addEventListener('click', function (e) {
    e.preventDefault();
   const formattedString = textInput.value.replace(/[^a-z0-9]/gi,'');
   console.log(formattedString);
   if(formattedString.length === 0) {
    alert('Please input a value');
    return;
   }
   let reversedString = '';
   for (let index = 0; index < formattedString.length; index++) {
    reversedString += formattedString.at(formattedString.length - index - 1);
   }
   result.style.display = 'block';
   console.log(reversedString);
   if (reversedString.toLowerCase() === formattedString.toLowerCase()) {
    result.textContent = `${textInput.value} is a palindrome`;
   } else {
    result.textContent = `${textInput.value} is not a palindrome`;
   }
});
