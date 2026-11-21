// Bloco 1: Variáveis, operadores e console

// 1.
let value = parseFloat(prompt(`Digite o valor da conta:`));
let service_charge = prompt(`Vai pagar a taxa de serviço? (s/n):`)
let number_people = Number(prompt(`Digite o número de pessoas na mesa:`));

if (service_charge === "n" || service_charge === "N") {
    console.log(`O valor que cada pessoa irá pagar é R$${value / number_people}`);
} else if (service_charge === "s" || service_charge === "S") {
    value += value * 0.1
    console.log(`O valor que cada pessoa irá pagar é R$${value / number_people}`);
}

// 2.
let leftover = parseFloat(prompt(`Digite o saldo atual do bilhete:`));
const TARIFF = 5;
let trip = leftover / TARIFF;
let remnant = parseFloat(leftover % TARIFF);

console.log(`O saldo atual é ${leftover}, Tem saldo para ${Math.floor(trip)} viagens.`);
if (remnant != 0) {
    console.log(`Assim, restam R$${remnant.toFixed(2)} no bilhete.`);
}

// 3.
let file_size = Number(prompt(`Digite o tamanho total do Arquivo em GB:`));
let download_speed = Number(prompt(`Digite a velocidade do download em Mbps:`));
let Mb_size = file_size * 8192;
let download_time = Math.floor(Mb_size / download_speed);
let minutes = Math.floor(download_time / 60);
let seconds = download_time % 60;

console.log(`${minutes} minutos e ${seconds} segundos para concluir a instalação.`);

// 4.
let purchase_amount = parseFloat(prompt(`Digite o valor da compra:`));
let given_value = parseFloat(prompt(`Digite o valor dado:`));
let difference = given_value - purchase_amount;

console.log(`O valor do troco é ${difference}.`);
while (difference > 0) {
    if (difference > 99) {
        let n100 = Math.floor(difference / 100);
        console.log(`${n100} nota(s) de 100 reais.`);
        difference = difference - n100 * 100;
    } else if (difference > 49) {
        let n50 = Math.floor(difference / 50);
        console.log(`${n50} nota(s) de 50 reais.`);
        difference = difference - n50 * 50;
    } else if (difference > 19) {
        let n20 = Math.floor(difference / 20);
        console.log(`${n20} nota(s) de 20 reais.`);
        difference = difference - n20 * 20;
    } else if (difference > 9) {
        let n10 = Math.floor(difference / 10);
        console.log(`${n10} nota(s) de 10 reais.`);
        difference = difference - n10 * 10;
    } else if (difference > 4) {
        let n5 = Math.floor(difference / 5);
        console.log(`${n5} nota(s) de 5 reais.`);
        difference = difference - n5 * 5;
    } else if (difference > 1) {
        let n2 = Math.floor(difference / 2);
        console.log(`${n2} nota(s) de 2 reais.`);
        difference = difference - n2 * 2;
    } else if (difference == 1) {
        let n1 = Math.floor(difference / 1);
        console.log(`${n1} moeda(s) de 1 real.`);
        difference = difference - n1 * 1;
    }
}

// 5.
let distance = parseFloat(prompt(`Digite a distância até o destino em Km:`));
let fuel_consumption = Number(prompt(`Digite o consumo em Km/L:`));
let fuel_price = parseFloat(prompt(`Digite o preço do litro do combustível:`));

console.log(`O custo de ida e volta é de R$${((distance*2/fuel_consumption)*fuel_price).toFixed(2)}\nO custo por Km é R$${(fuel_price/fuel_consumption).toFixed(2)}`);