
// 1. Patient Name Analyzer
function findWords() {
    var text = document.getElementById("patientName").value.trim();

    if (text === "") {
        alert("Please enter the patient name.");
        return;
    }

    var words = text.split(/\s+/);
    var shortest = words[0];
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }

        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    document.getElementById("wordResult").innerHTML =
        "Shortest: " + shortest +
        "<br>Longest: " + longest;
}


// 2. Patient BMI Calculator
function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    var bmi = weight / (height * height);

    document.getElementById("score").innerHTML = bmi.toFixed(2);

    var type;

    if (bmi < 18) {
        type = "Underweight";
    }
    else if (bmi <= 25) {
        type = "Normal";
    }
    else if (bmi <= 30) {
        type = "Overweight";
    }
    else {
        type = "Obese";
    }

    document.getElementById("type").innerHTML = type;
}


// 3. Hospital Ward Bed Generator
function grow() {
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid rows and columns.");
        return;
    }

    if (rows * columns > 100) {
        alert("Please generate a maximum of 100 beds.");
        return;
    }

    var beds = ["bed1.jpg", "bed2.jpg"];
    var garden = document.getElementById("garden");

    garden.innerHTML = "";

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var number = Math.floor(Math.random() * 2);

            garden.innerHTML +=
                "<img src='" + beds[number] +
                "' width='100' height='100' alt='Hospital Bed'>";
        }

        garden.innerHTML += "<br>";
    }
}


// 4. Medical Currency Converter
function convert() {
    var data = parseFloat(document.getElementById("data").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    if (isNaN(data) || data < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    var result;

    if (from === "Indian Rupee" && to === "US Dollar") {
        result = data * 0.015;
    }
    else if (from === "US Dollar" && to === "Indian Rupee") {
        result = data * 67.12;
    }
    else {
        result = data;
    }

    document.getElementById("answer").innerHTML = result.toFixed(2);
}


// 5. Appointment Token Generator
var confirmedCount = 0;
var waitingCount = 0;

document.getElementById("token").addEventListener("click", generateToken);

function generateToken() {
    var number = Math.floor(Math.random() * 2);

    if (number === 0) {
        document.getElementById("status").innerHTML = "Confirmed";
        confirmedCount++;

        document.getElementById("confirmed").innerHTML = confirmedCount;
    }
    else {
        document.getElementById("status").innerHTML = "Waiting";
        waitingCount++;

        document.getElementById("waiting").innerHTML = waitingCount;
    }
}


// 6. Healthcare Service Order Form
document.getElementById("submit").addEventListener("click", calculateOrder);

function calculateOrder() {
    var consultation = parseInt(document.getElementById("small").value) || 0;
    var specialist = parseInt(document.getElementById("medium").value) || 0;
    var checkup = parseInt(document.getElementById("large").value) || 0;

    if (consultation < 0 || specialist < 0 || checkup < 0) {
        alert("Please enter valid quantities.");
        return;
    }

    var selectedTip = document.querySelector('input[name="tip"]:checked');
    var tip = parseInt(selectedTip.value);

    var cost =
        (consultation * 200) +
        (specialist * 500) +
        (checkup * 1000);

    var tax = cost * 0.09;
    var totalAfterTax = cost + tax;
    var tipAmount = totalAfterTax * (tip / 100);
    var finalCost = totalAfterTax + tipAmount;

    document.getElementById("price").innerHTML = finalCost.toFixed(2);
}
