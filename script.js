function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    const lastChar = currentValue[currentValue.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return;
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}
