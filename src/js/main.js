const result = document.getElementById("result");

document.getElementById("submitBtn").onclick = function() {
    let temp = document.getElementById("temp").value;
    temp = Number(temp);
    if(document.getElementById("celsius").checked) {
        temp = toCelsius(temp);
        result.innerText = `${temp} °C`;
    } else if(document.getElementById("fahrenheit").checked) {
        temp = toFahrenheit(temp);
        result.innerText = `${temp} °F`;
    } else {
        setTimeout(() => {
            result.innerText = 'Bun, input a number!';
        }, 1000);
    }
}

function toCelsius(temp) {
    return Math.floor((temp - 32) * (5 / 9));
}

function toFahrenheit(temp) {
    return Math.floor(temp * 9 / 5 + 32);
}
