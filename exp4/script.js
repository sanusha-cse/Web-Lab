
document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for joining FitZone! Your registration is successful.");

    this.reset();
});
