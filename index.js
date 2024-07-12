
alert("Hello, Hello! Welcome to the calculator!")
let number1 = prompt("Please enter a number: ")
let number2 = prompt("Please enter another number: ")
let math = prompt("Please enter +, -, * or /: ")
let result = 0;

switch(math) {
    case "+":
      result = parseInt(number1)+parseInt(number2);
      alert("The result is: " + result);
      break;
    case "-":
        result = parseInt(number1)-parseInt(number2);
        alert("The result is: " + result);
      break;1
    case "*":
        result = parseInt(number1)*parseInt(number2);
        alert("The result is: " + result);
    break;
    case "/":
        result = parseInt(number1)/parseInt(number22);
        alert("The result is: " + result);
    break;
    default:
      alert("wrong input!")
}1
alert("Thanks for using me, bye!")