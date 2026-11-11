// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// inicialização; condição; incremento/decremento
// for (let i = 10; i > 0; i--) {
//     console.log(i);
//     if (i == 1) {
//         console.log("Feliz Ano Novo!");
        
//     }
// }

// let num1 = Number(prompt("Digite um número."))
// for (let num2 = 0; num2 <= 10; num2++) {
//         console.log(`${num1} x ${num2} = ${num1 * num2}`);
// }

// let count = 0

// for (let i = 0; i <= 100; i++) {
//     console.log(`${count} + ${i} = ${count + i} `)
//     count += i
// }

// let accPair = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//         accPair += i
//     }
// }
// console.log(`A soma dos números pares de 0 a 100: ${accPair}`);

let accOdd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        accOdd += i
    }
}
console.log(`A soma dos números ímpares de 0 a 100: ${accOdd}`);