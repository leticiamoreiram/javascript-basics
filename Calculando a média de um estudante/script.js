/*
    solicitar nome do aluno e 3 notas e
    fazer o cálculo da média

    média deve ser maior que 6

    se passou, dar parabéns

    se não passou, motivar a melhorar na
    recuperação

    mostrar mensagem com nome do aluno e nota

*/

const student = prompt("Nome do aluno:");

let grade1 = prompt("Nota da primeira prova:");
let grade2 = prompt("Nota da segunda prova:");
let grade3 = prompt("Nota da terceira prova:");

grade1 = Number(grade1);
grade2 = Number(grade2);
grade3 = Number(grade3);

let mean = (grade1 + grade2 + grade3) / 3;

if(mean >= 6) {
    alert("Parabéns, " + student + "! Sua média foi: " + mean.toFixed(2));
} else {
    alert(student + ", estude para a recuperação! Sua média foi: " + mean.toFixed(2));
}
