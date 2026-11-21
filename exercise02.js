//Bloco 2: Comparações, if, else e else if

// 6.
// let gasoline_price = parseFloat(prompt(`Digite o preço da gasolina:`));
// let ethanol_price = parseFloat(prompt(`Digite o preço do etanol:`));

// if (ethanol_price <= 0.7 * gasoline_price) {
//     console.log(`O etanol compensa mais. A diferença percentual é ${(ethanol_price/gasoline_price) * 100}%`);
// } else if (ethanol_price > 0.7 * gasoline_price) {
//     console.log(`A gasolina compensa mais. A diferença percentual é ${(ethanol_price/gasoline_price) * 100}%`);
// }

// 7.
// let purchase_amount = parseFloat(prompt(`Digite o valor da compra:`));
// let package_weight = parseFloat(prompt(`Digite o peso do pacote em Kg:`));
// let over = package_weight - 5

// if (purchase_amount >= 250) {
//     console.log(`Frete grátis`);
// } else {
//     if (package_weight <= 1) {
//         console.log(`Frete de R$${(15).toFixed(2)}`);
//     } else if (package_weight <= 5) {
//         console.log(`Frete de R$${(25).toFixed(2)}`);        
//     } else if (package_weight > 5) {
//         console.log(`Frete de R$${(25 + 4 * over).toFixed(2)}`);
//     }
// }

// 8.
// let age = Number(prompt(`Digite a idade:`));
// let student = prompt(`Digite se paga meia estudante:`)
// let day_week = prompt(`Digite o dia da semana:`)
// if (age < 12 || age > 59 || student == "s" || day_week == "terça") {
//     console.log(`Meia entrada, R$${(20).toFixed(2)}`);
// } else {
//     console.log(`Entrada inteira, R$${(40).toFixed(2)}`);
// }

// 9.
// let hour = Number(prompt(`Digite a hora, no formato 24H:`));
// let minute = Number(prompt(`Digite o minuto:`));

// hour >= 0 && hour < 6 ? console.log(`Boa madrugada!`)
// : hour >= 6 && hour < 12 ? console.log(`Bom dia!`)
// : hour >= 12 && hour < 18 ? console.log(`Boa tarde!`)
// : hour >= 18 && hour < 24 ? console.log(`Boa noite!`)
// : console.log(`Horário inválido.`);

// 10.
// let wage = parseFloat(prompt(`Digite o salário:`));
// let installment = parseFloat(prompt(`Digite a parcela do empréstimo:`));
// if (installment <= 0.3 * wage) {
//     console.log(`Aprovado!`);
// } else {
//     console.log(`Reprovado!\nA parcela máxima é de R$${(wage * 0.3).toFixed(2)}`);
// }

// 11.
// let gb_usage = Number(prompt(`Digite quantos GB são usados por mês:`));
// gb_usage >= 14 && gb_usage <= 20 ? console.log(`A melhor opção é a A, já que vai usar ${gb_usage}GB.\nA partir de 14GB o valor adicional cobrado é mais de R$27,00, já que não serão usados mais de 20GB o plano A é o melhor.\nCom o plano B, ficaria R$${((gb_usage-5)*3+30).toFixed(2)}`)
// : gb_usage > 20 ? console.log(`O único plano que pode dar mais de 20GB é o B. custando R$${((gb_usage-5)*3+30).toFixed(2)} com o adicional incluso.`)
// : gb_usage > 5 && gb_usage < 14 ? console.log(`A melhor opção é a B, já que vai usar ${gb_usage}GB o custo total ficará R$${((gb_usage-5)*3+30).toFixed(2)}, vai economizar R$${(55-((gb_usage-5)*3+30)).toFixed(2)}`)
// : console.log(`O plano B é a melhor opção.\nApenas ${gb_usage}GB serão usados, dessa forma, custando R$30.00, vai economizar R$${(55 - 30).toFixed(2)}`);