function mul(value, price) {

    var x;
    x = price * value;
    document.getElementById('subtotal').value = x;
}
function mul1(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal1').value = x;
}
function mul2(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal2').value = x;
}
function mul3(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal3').value = x;
}
function mul4(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal4').value = x;
}
function mul5(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal5').value = x;
}
function mul6(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal6').value = x;
}
function mul7(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal7').value = x;
}
function mul8(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal8').value = x;
}
function mul9(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal9').value = x;
}
function mul10(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal10').value = x;
}
function mul11(value, price) {
    var x;
    x = price * value;
    document.getElementById('subtotal11').value = x;
}

function sum() {
    var table = document.getElementById("table"), sumval = 0;
    for (var i = 1; i < 13; i++) {

        sumval = sumval + parseInt(table.rows[i].cells[4].innerHTML);
    }
    document.getElementById('payable-amount').value = sumval;
}