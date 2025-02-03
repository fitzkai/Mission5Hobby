// calculating cost for services
$(document).ready(function () {
    const costPerHour = 17; // Set cost per hour

    $("#calculateBtn").click(function () {
        let hours = $("#hoursInput").val(); // Get user input

        if ($.isNumeric(hours) && parseFloat(hours) >= 0) {
            let total = costPerHour * parseFloat(hours); // Calculate total cost
            $("#totalCost").text(total.toFixed(2)); // Display in non-editable span
        } else {
            alert("Please enter a valid number of hours.");
        }
    });
});

