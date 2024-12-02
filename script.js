function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearAll() {
    document.getElementById('result').value = '';
    document.getElementById('history').innerText = '';
}

function deleteLast() {
    const current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}

function calculate() {
    const expression = document.getElementById('result').value;
    try {
        const result = eval(expression);
        document.getElementById('history').innerText = expression;
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Тооцоолол буруу байна!');
    }
}
