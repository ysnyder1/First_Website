$(document).ready(function() {

    var contentOdd = document.getElementsByClassName("contentOdd");
    var contentEven = document.getElementsByClassName("contentEven");


    for (var a = 0; a < contentOdd.length; a++) {
        if (a % 2 === 1) {
            contentOdd[a].classList.add("contentOddReverse");
            contentEven[a].classList.add("contentEvenReverse");
        }
    }
        $("#accordion").accordion();



});