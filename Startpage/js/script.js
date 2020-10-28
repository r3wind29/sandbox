function startTime() { // timer
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = 
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

    var greet;
    if (h < 12)
    greet = 'Good Morning';
    else if (h >= 12 && h <= 17)
    greet = 'Good Afternoon';
    else if (h >= 17 && h <= 24)
    greet = 'Good Evening';

    document.getElementById('sGreetings').innerHTML =
    '<b>' + greet + '</b> master!';
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}