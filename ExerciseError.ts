function calculator(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }else {
        try {
            if (operator!="+" ||
                operator!="-"||
                operator!="*"||
                operator!="/"){
                throw RangeError("Operator must be an +,-,*,/");
            }
        }catch (error){
            console.log("Error : " + error.message);
        }
    }
    return result;
}
console.log(calculator(3, 9, '%'));

