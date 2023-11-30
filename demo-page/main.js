function init(isGoingToShowAlert) {
    if (isGoingToShowAlert) {
        alert("Try to set a breakpoint before the alert triggers in main.js");
    }
}

setTimeout(() => init(true), 1000);