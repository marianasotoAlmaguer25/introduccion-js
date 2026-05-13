const display = document.getElementById('password-display');
const slider = document.getElementById('length-slider');
const lengthNum = document.getElementById('length-num');
const generateBtn = document.getElementById('generate-btn');
const bars = document.querySelectorAll('.bar');
const strengthText = document.getElementById('strength-text');


slider.addEventListener('input', () => {
    lengthNum.textContent = slider.value;
});


generateBtn.addEventListener('click', () => {
    const length = +slider.value;
    const config = {
        upper: document.getElementById('upper').checked,
        lower: document.getElementById('lower').checked,
        numbers: document.getElementById('numbers').checked,
        symbols: document.getElementById('symbols').checked
    };

    const password = createPassword(length, config);
    display.value = password;
    updateStrength(config, length);
});

function createPassword(length, config) {
    let chars = "";
    if (config.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (config.lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (config.numbers) chars += "0123456789";
    if (config.symbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (chars === "") return "";

    let generated = "";
    for (let i = 0; i < length; i++) {
        generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return generated;
}


function updateStrength(config, length) {
    const activeOptions = Object.values(config).filter(v => v).length;
    let score = activeOptions + (length > 10 ? 1 : 0);


    bars.forEach(b => { b.style.background = "transparent"; b.style.borderColor = "white"; });

    if (score <= 2) {
        setBars(1, "#F64A4A", "TOO WEAK!");
    } else if (score === 3) {
        setBars(2, "#FB7C58", "WEAK");
    } else if (score === 4) {
        setBars(3, "#F8CD65", "MEDIUM");
    } else {
        setBars(4, "#A4FFAF", "STRONG");
    }
}

function setBars(count, color, label) {
    strengthText.textContent = label;
    for (let i = 0; i < count; i++) {
        bars[i].style.background = color;
        bars[i].style.borderColor = color;
    }
}