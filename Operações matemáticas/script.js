/*
    capturar 2 numeros e fazer as operações
    de soma, subtração, multiplicação, divisão
    e resto da divisão
*/

let firstNumber = prompt('Digite o primeiro número');
let secondNumber = prompt('Digite o segundo número');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + mult);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + restDiv);

