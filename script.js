// Main variables
let clock = document.getElementById('clock');
let body = document.querySelector('body');
let colors = [ '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1' ];

// Array index
let i = 0;

// Date constructor
let date = new Date();


// Pad time with leading zero
function pad(number) {
    if(number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}


// Get current time with 12hr format and AM/PM
function currentTime() {
    let hours = date.getHours();
    let mins = pad(date.getMinutes());
    let sec = pad(date.getSeconds());
    let ampm = hours >= 12 ? 'pm' : 'am'; // returns pm if hours >= 12, else returns am
    hours = hours % 12; // current hour divided by 12
    hours = pad(hours);

    return `${hours}:${mins}:${sec}${ampm}`;
}


console.log(currentTime());