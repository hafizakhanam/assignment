function multiplicationTable(num) {
    console.log("Multiplication Table of", num, "given below")
    for(i=1; i<=10; i++) {
        console.log(num + ' * ' + i + ' = '  + num * i );
    }

}

multiplicationTable(9);