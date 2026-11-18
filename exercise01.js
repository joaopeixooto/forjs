// Bloco 1: Variáveis, operadores e console

// // 1.
// let value = parseFloat(prompt(`Digite o valor da conta.`));
// let service_charge = prompt(`Vai pagar a taxa de serviço? (s/n)`)
// let number_people = Number(prompt(`Digite o número de pessoas na mesa.`));

// if (service_charge === "n" || service_charge === "N") {
//     console.log(`O valor que cada pessoa irá pagar é R$${value / number_people}`);
// } else if (service_charge === "s" || service_charge === "S") {
//     value += value * 0.1
//     console.log(`O valor que cada pessoa irá pagar é R$${value / number_people}`);
// }

// 2.
// let leftover = parseFloat(prompt(`Digite o saldo atual do bilhete:`));
// const TARIFF = 5;
// let trip = leftover / TARIFF;
// let remnant = parseFloat(leftover % TARIFF);

// console.log(`O saldo atual é ${leftover}, Tem saldo para ${Math.floor(trip)} viagens.`);
// if (remnant != 0) {
//     console.log(`Ainda resta R$${remnant.toFixed(2)} no bilhete.`);
// }

// 3.
// let file_size = Number(prompt(`Digite o tamanho total do Arquivo em GB:`));
// let download_speed = Number(prompt(`Digite a velocidade do download em Mbps:`));
// let Mb_size = file_size * 8192;
// let download_time = Math.floor(Mb_size / download_speed);
// let minutes = Math.floor(download_time / 60);
// let seconds = download_time % 60;

// console.log(`${minutes} minutos e ${seconds} segundos para concluir a instalação.`);

// 4.
let purchase_amount = parseFloat(prompt(`Digite o valor da compra`));
let given_value = parseFloat(prompt(`Digite o valor dado:`));
let difference = given_value - purchase_amount;
let difference100 = Math.floor(difference / 100);
let difference50 = Math.floor(difference / 50);
let difference20 = Math.floor(difference / 20);
let difference10 = Math.floor(difference / 10);
let difference5 = Math.floor(difference / 5);
let difference2 = Math.floor(difference / 2);
let difference1 = Math.floor(difference / 1);

while (difference1 >= 1) {
    difference -= difference - difference1;
    while (difference2 >= 2) {
        difference -= difference - difference2;
        while (difference5 >= 5) {
            difference -= difference - difference5;
            while (difference10 >= 10) {
                difference -= difference - difference10;
                while (difference20 >= 20) {
                    difference -= difference - difference20;
                    while (difference50 >= 50) {
                        difference -= difference - difference50;
                        while (difference100 >= 100) {
                            difference -= difference - difference100;
                        }
                    }
                }
            }
        }
    }
}