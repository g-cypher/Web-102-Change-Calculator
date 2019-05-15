
function calculateAmountOwed() {
    
    var amountGiven = document.getElementById("amount-received").value * 100;
    var amountOwed = document.getElementById("amount-due").value * 100;
    var changeDue = amountGiven - amountOwed;
    document.getElementById("change-output").innerHTML = changeDue / 100;

    if (changeDue >= 100) {
        document.getElementById("dollars-output").innerHTML = Math.floor(changeDue / 100);
        changeDue = changeDue % 100;
    }       else {
        document.getElementById("dollars-output").innerHTML = 0;
    }

    if (changeDue >= 25) {
        document.getElementById("quarters-output").innerHTML = Math.floor(changeDue / 25);
        changeDue = changeDue % 25;
       }    else {
        document.getElementById("quarters-output").innerHTML = 0;
       }
       
    if (changeDue >= 10) {
        document.getElementById("dimes-output").innerHTML = Math.floor(changeDue / 10);
        changeDue = changeDue % 10;
       }    else {
        document.getElementById("dimes-output").innerHTML = 0;
       }
        
    if (changeDue >= 5) {
        document.getElementById("nickels-output").innerHTML = Math.floor(changeDue / 5);
        changeDue = changeDue % 5;
       }    else {
        document.getElementById("nickels-output").innerHTML = 0;
       }

       if (changeDue >= 1) {
        document.getElementById("pennies-output").innerHTML = Math.ceil(changeDue / 1);
        changeDue = changeDue % 1;
       }    else {
        document.getElementById("pennies-output").innerHTML = 0;
       };





}
    


