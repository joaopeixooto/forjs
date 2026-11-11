// Bloco 1: Variáveis, operadores e console

// 1.
let value = parseFloat(prompt(`Digite o valor da conta.`));
let service_charge = prompt(`Vai pagar a taxa de serviço? (s/n)`)
let number_people = Number(prompt(`Digite o número de pessoas na mesa.`));

if (service_charge === "n" || "N") {
    console.log(`O valor que cada pessoa irá pagar é R$${value / number_people}`);
} else if (service_charge === "s" || "S") {
    value += value * 0.1
    console.log(`O valor que cada pessoa irá pagar é R$${value / number_people}`);
}