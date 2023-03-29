function multiplicationTable(num) {
    console.log("Multiplication Table of", num, "given below")
    for(i=1; i<=10; i++) {
        console.log(num + ' * ' + i + ' = '  + num * i );
    }

}

multiplicationTable(5);

function gradeCalculator(number) {
    if (number >= 90 && number <= 100 ) {
        console.log("A");
    }
    else if (number >= 80 && number <= 89) {
        console.log("B");
    }
    else if (number >= 70 && number <= 79) {
        console.log("C");
    }
    else if (number >= 60 && number <= 69) {
        console.log("D");
    }
    else if (number >= 0 && number <= 59) {
        console.log("F");
    }
    else {
        console.log("Please Enter Number Value");
    }

}
gradeCalculator(85);