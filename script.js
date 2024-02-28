// Main variables
let clock = document.getElementById('clock');
let body = document.querySelector('body');
let colors = [ '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1' ];

// Array index
let i = 0;


// Pad time with leading zero
function padTime(number) {
    if(number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}


// Change background color each second
function changeColor() {
    body.style.backgroundColor = colors[i];
    i++;

    if(i > colors.length) {
        i = 0;
    }
}


// Get current time with 12hr format and AM/PM
function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = padTime(date.getMinutes());
    let sec = padTime(date.getSeconds());

    let ampm = hours >= 12 ? 'pm' : 'am'; // logic for determining AM or PM
    hours = hours % 12; // current hour divided by 12
    hours = hours ? hours : 12; // logic for zero hour (midnight)
    hours = padTime(hours);

    clock.textContent = `${hours}:${mins}:${sec} ${ampm}`;

    changeColor();
}


setInterval(currentTime, 1000);