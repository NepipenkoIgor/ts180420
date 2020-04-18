"use strict";
Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: true });
function deliveryMethod() {
    // TODO
    return 'overnight';
}
function shipWeight() {
    var el = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML, 10);
}
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        console.log("Shipping to " + addr + " via " + (deliveryMethod() || 'standard') + " delivery");
        if (shipWeight() > 100) {
            console.log('WARNING: Oversize package');
        }
    }
    if (emailAddr instanceof Array) {
        emailAddr.forEach(function (val) {
            sendEmail(val.trim());
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
