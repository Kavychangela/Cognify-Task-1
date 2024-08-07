function addNumbers() {
    // Get the values from the input fields
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    // Check if inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }
    
    // Perform the addition
    const sum = num1 + num2;
    
    // Display the result
    document.getElementById('result').innerText = 'Result: ' + sum;
}