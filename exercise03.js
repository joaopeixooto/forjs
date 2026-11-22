//Bloco 3: Swtich

// 15.
// let last_digit = Number(prompt(`Digite o último digito da placa do veículo:`));
// let day_week = prompt(`Informe o dia da semana:`);
// let hour = prompt (`Informe a hora`);

// switch (last_digit) {
//     case 1:
//     case 2:
//         if (day_week === "Segunda" || day_week === "segunda") {
//             if (hour >= 7 && hour <= 10){
//                 console.log(`O seu veículo não pode circular.`);
//             } else if (hour >= 17 && hour <= 20) {
//                 console.log(`O seu veículo não pode circular.`);
//             } else {
//                 console.log(`Atente-se, seu veículo não pode circular durante 7h às 10h e 17h às 20h.`);
//             }
//         } else {
//             console.log(`Seu veículo pode circular.`);
//         }
//         break;
//     case 3:
//     case 4:
//         if (day_week === "Terça" || day_week === "terça") {
//             if (hour >= 7 && hour <= 10){
//                 console.log(`O seu veículo não pode circular.`);
//             } else if (hour >= 17 && hour <= 20) {
//                 console.log(`O seu veículo não pode circular.`);
//             } else {
//                 console.log(`Atente-se, seu veículo não pode circular durante 7h às 10h e 17h às 20h.`);
//             }
//         } else {
//             console.log(`Seu veículo pode circular.`);
//         }
//         break;
//     case 5:
//     case 6:
//         if (day_week === "Quarta" || day_week === "quarta") {
//             if (hour >= 7 && hour <= 10){
//                 console.log(`O seu veículo não pode circular.`);
//             } else if (hour >= 17 && hour <= 20) {
//                 console.log(`O seu veículo não pode circular.`);
//             } else {
//                 console.log(`Atente-se, seu veículo não pode circular durante 7h às 10h e 17h às 20h.`);
//             }
//         } else {
//             console.log(`Seu veículo pode circular.`);
//         }
//         break;
//     case 7:
//     case 8:
//         if (day_week === "Quinta" || day_week === "quinta") {
//             if (hour >= 7 && hour <= 10){
//                 console.log(`O seu veículo não pode circular.`);
//             } else if (hour >= 17 && hour <= 20) {
//                 console.log(`O seu veículo não pode circular.`);
//             } else {
//                 console.log(`Atente-se, seu veículo não pode circular durante 7h às 10h e 17h às 20h.`);
//             }
//         } else {
//             console.log(`Seu veículo pode circular.`);
//         }
//         break;
//     case 9:
//     case 0:
//         if (day_week == "Sexta" || day_week == "sexta") {
//             if (hour >= 7 && hour <= 10){
//                 console.log(`O seu veículo não pode circular.`);
//             } else if (hour >= 17 && hour <= 20) {
//                 console.log(`O seu veículo não pode circular.`);
//             } else {
//                 console.log(`Atente-se, seu veículo não pode circular durante 7h às 10h e 17h às 20h.`);
//             }
//         } else {
//             console.log(`Seu veículo pode circular.`);
//         }
//         break;
// }

// 16.
let code = Number(prompt(`Digite o código de Status HTTP:`));
let class_code = Math.floor(code / 100);

switch (code) {
    case 200:
        console.log(`O código HTTP 200 (OK) é a resposta padrão de sucesso.`);
        break;
    case 201:
        console.log(`O código HTTP 201 (Created) indica que a requisição foi bem-sucedida e resultou na criação de um ou mais novos recursos no servidor.`);
        break;
    case 301:
        console.log(`O código 301 (Moved Permanently) é um status HTTP que indica que uma página ou recurso mudou de endereço de forma definitiva para a URL informada no cabeçalho "location".`);
        break;
    case 400:
        console.log(`O código HTTP 400 (Bad Request) indica que o servidor não pode processar a requisição porque ela foi enviada com sintaxe inválida, dados incorretos ou formato malformado pelo cliente.`);
        break;
    case 401:
        console.log(`O código HTTP 401 (Unauthorized) indica que a requisição não foi concluída porque faltam credenciais de autenticação válidas para o recurso solicitado.`);
        break;
    case 403:
        console.log(`O código HTTP 403 (Forbidden) indica que o servidor entendeu a solicitação, mas se recusa a autorizá-la.`);
        break;
    case 404:
        console.log(`O código HTTP 404 (Not Found) indica que o servidor foi acessado com sucesso, mas não encontrou o recurso ou a página solicitada no endereço informado.`);
        break;
    case 500:
        console.log(`O código HTTP 500 (Internal Server Error) indica uma falha genérica e inesperada no servidor que impede o processamento da solicitação.`);
        break;
    default:
        if (class_code == 2) {
            console.log(`Classe 2xx, sucesso.`);
        } else if (class_code == 4) {
            console.log(`Classe 4xx, erro do cliente.`);
        } else if (class_code == 5) {
            console.log(`Classe 5xx, erro do servidor.`);
        }
}