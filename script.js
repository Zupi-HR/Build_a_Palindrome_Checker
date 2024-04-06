const textInput = document.getElementById('text-input');
const checkBTN = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBTN.addEventListener('click', function (e) {
    e.preventDefault();
    result.style.display = 'block';
    if (textInput.value.trim().length === 0) {
        alert('Please input a value');
    } else {
        result.textContent = `${textInput.value} is a palindrome`;
    }
});
