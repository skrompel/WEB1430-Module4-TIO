"use strict";

document.getElementById('calculateBtn').addEventListener('click', calculateArea);
document.getElementById('resetBtn').addEventListener('click', resetForm);

function calculateArea() {
    let radius = document.getElementById('radius').value;
    
    if (radius < 0 | radius === '') {
        document.getElementById('result').innerText = "Please enter a valid radius.";
        return;
    }

    let area = Math.PI * radius * radius; // radius.value resulted in "NaN"
    document.getElementById('result').innerText = "The area is: " + area;
}

function resetForm() {
    document.getElementById('radius').value = '';
    document.getElementById('result').innerText = '';
}
