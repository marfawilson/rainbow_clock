// Main variables
let clock = document.getElementById('clock');
let body = document.querySelector('body');
let colors = [ '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1' ];

// Array index
let i = 0;


// Get time & set background color
function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    clock.textContent = (hours + ':' + mins + ':' + secs);

    // if(hours < 10 && mins < 10 && secs < 10) {
    //     hours.slice
    //   }

    body.style.backgroundColor = colors[i];
    i++;

    if (i > colors.length) {
        i = 0;
    }
}

setInterval(getTime, 1000);

// function time(){
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     clock.textContent = (h + ':' + m + ':' + s);

//     div.style.backgroundColor = colors[i];
//     i++;

//     if(i > colors.length){
//         i = 0;
//     }

// };

// setInterval(time, 1000);
