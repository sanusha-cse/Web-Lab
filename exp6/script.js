
// 1. DIGITAL CLOCK USING DATE OBJECT

function displayTime() {
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("time").innerHTML =
        h + ":" + m + ":" + s;
}

displayTime();

// Update clock every second
setInterval(displayTime, 1000);


// 2. AMBULANCE MOVEMENT USING setTimeout()

var ambulance;
var animate = null;
var position = 0;

function init() {
    ambulance = document.getElementById("ambulanceIcon");
    ambulance.style.left = "0px";
}

function moveRight() {

    if (animate !== null) {
        return;
    }

    document.getElementById("movementStatus").innerHTML =
        "Status: Ambulance Moving";

    animate = setInterval(function () {

        var road = document.querySelector(".road");
        var maxPosition = road.clientWidth - ambulance.offsetWidth;

        if (position >= maxPosition) {
            stop();
            document.getElementById("movementStatus").innerHTML =
                "Status: Destination Reached";
            return;
        }

        position += 5;
        ambulance.style.left = position + "px";

    }, 30);
}


// 3. STOP AMBULANCE

function stop() {

    if (animate !== null) {
        clearInterval(animate);
        animate = null;
    }

    document.getElementById("movementStatus").innerHTML =
        "Status: Ambulance Stopped";
}


// 4. RESET AMBULANCE

function resetAmbulance() {

    stop();

    position = 0;
    ambulance.style.left = "0px";

    document.getElementById("movementStatus").innerHTML =
        "Status: Ready";
}


// 5. EMERGENCY ALERT

function emergencyAlert() {

    var count = document.getElementById("emergencyCount");

    var current = parseInt(count.innerHTML);

    count.innerHTML = current + 1;

    alert(
        "🚨 EMERGENCY ALERT!\n\n" +
        "Emergency response team has been notified."
    );
}


// 6. WINDOW ONLOAD EVENT

window.onload = init;
