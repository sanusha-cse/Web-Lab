
// JQUERY DOCUMENT READY FUNCTION

$(document).ready(function() {

    // 1. CHANGE CAR BODY COLOR

    $("#red").click(function() {
        $(".car-body, .roof").css("background", "#e63946");
        $("#status").html("🔴 Car Color: Red Selected");
    });

    $("#blue").click(function() {
        $(".car-body, .roof").css("background", "#1976d2");
        $("#status").html("🔵 Car Color: Blue Selected");
    });

    $("#black").click(function() {
        $(".car-body, .roof").css("background", "#222222");
        $("#status").html("⚫ Car Color: Black Selected");
    });

    $("#green").click(function() {
        $(".car-body, .roof").css("background", "#2a9d8f");
        $("#status").html("🟢 Car Color: Green Selected");
    });

    $("#yellow").click(function() {
        $(".car-body, .roof").css("background", "#f4a261");
        $("#status").html("🟡 Car Color: Yellow Selected");
    });


    // 2. CHANGE GLASS TINT

    $("#lightGlass").click(function() {
        $(".glass").css("background", "#9be7ff");
        $("#status").html("🪟 Glass Tint: Light Selected");
    });

    $("#darkGlass").click(function() {
        $(".glass").css("background", "#263238");
        $("#status").html("🪟 Glass Tint: Dark Selected");
    });

    $("#blueGlass").click(function() {
        $(".glass").css("background", "#1565c0");
        $("#status").html("🪟 Glass Tint: Blue Selected");
    });


    // 3. CHANGE TYRE SIZE

    $("#smallTyre").click(function() {
        $(".wheel").css({
            "width": "55px",
            "height": "55px",
            "top": "135px"
        });

        $("#status").html("⚙ Tyre Size: Small Selected");
    });

    $("#mediumTyre").click(function() {
        $(".wheel").css({
            "width": "65px",
            "height": "65px",
            "top": "130px"
        });

        $("#status").html("⚙ Tyre Size: Medium Selected");
    });

    $("#largeTyre").click(function() {
        $(".wheel").css({
            "width": "80px",
            "height": "80px",
            "top": "115px"
        });

        $("#status").html("⚙ Tyre Size: Large Selected");
    });


    // 4. RESET CUSTOMIZATION

    $("#reset").click(function() {

        // Reset car color
        $(".car-body, .roof").css("background", "#e63946");

        // Reset glass tint
        $(".glass").css("background", "#9be7ff");

        // Reset tyre size
        $(".wheel").css({
            "width": "65px",
            "height": "65px",
            "top": "130px"
        });

        // Update status
        $("#status").html("✅ Car Customization Reset Successfully!");

    });

});
