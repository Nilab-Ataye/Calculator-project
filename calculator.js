document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");

    window.appendToDisplay = function (value) {

        if (value === "AC") {
            display.value = "";
        }

        else if (value === "+/-") {
            if (display.value !== "") {
                if (display.value.startsWith("-")) {
                    display.value = display.value.substring(1);
                } else {
                    display.value = "-" + display.value;
                }
            }
        }

        else if (value === "%") {
            if (display.value !== "") {
                display.value = Number(display.value) / 100;
            }
        }

        else {
            display.value += value;
        }
    };

    window.calculate = function () {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    };

});