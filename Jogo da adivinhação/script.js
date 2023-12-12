/*

    ** Jogo da adivinhação**

    apresente a mensagem:
    'Adivinhe o número que estou pensando entre 0 e 10'

    crie uma lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que
    o aleatório gerado pelo sistema

    sinalizar enquanto o usuário errar

    caso acerte, parabenizar:
    'Parabéns! Você adivinhou em x tentativas'

*/

let number = prompt("Adivinhe o número que estou pensando entre 0 e 10.");
let random = Math.round(Math.random() * 10); 
let attempts = 1;

while(Number(number) !== random) {
    number = prompt("Erro, tente novamente");
    attempts ++;
}

alert("Parabéns! Você acertou em " + attempts + " tentativas.");