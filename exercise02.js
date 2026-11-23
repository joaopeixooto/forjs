// Bloco 2: Comparações, if, else e else if

// 6.
let gasoline_price = parseFloat(prompt(`Digite o preço da gasolina:`));
let ethanol_price = parseFloat(prompt(`Digite o preço do etanol:`));

if (ethanol_price <= 0.7 * gasoline_price) {
    console.log(`O etanol compensa mais. A diferença percentual é ${(ethanol_price/gasoline_price) * 100}%`);
} else if (ethanol_price > 0.7 * gasoline_price) {
    console.log(`A gasolina compensa mais. A diferença percentual é ${(ethanol_price/gasoline_price) * 100}%`);
}

// 7.
let purchase_amount = parseFloat(prompt(`Digite o valor da compra:`));
let package_weight = parseFloat(prompt(`Digite o peso do pacote em Kg:`));
let over = package_weight - 5

if (purchase_amount >= 250) {
    console.log(`Frete grátis`);
} else {
    if (package_weight <= 1) {
        console.log(`Frete de R$${(15).toFixed(2)}`);
    } else if (package_weight <= 5) {
        console.log(`Frete de R$${(25).toFixed(2)}`);        
    } else if (package_weight > 5) {
        console.log(`Frete de R$${(25 + 4 * over).toFixed(2)}`);
    }
}

// 8.
let age = Number(prompt(`Digite a idade:`));
let student = prompt(`Digite se paga meia estudante:`)
let day_week = prompt(`Digite o dia da semana:`)
if (age < 12 || age > 59 || student == "s" || day_week == "terça") {
    console.log(`Meia entrada, R$${(20).toFixed(2)}`);
} else {
    console.log(`Entrada inteira, R$${(40).toFixed(2)}`);
}

// 9.
let hour = Number(prompt(`Digite a hora, no formato 24H:`));
let minute = Number(prompt(`Digite o minuto:`));

hour >= 0 && hour < 6 ? console.log(`Boa madrugada! São ${hour}:${minute}.`)
: hour >= 6 && hour < 12 ? console.log(`Bom dia! São ${hour}:${minute}.`)
: hour >= 12 && hour < 18 ? console.log(`Boa tarde! São ${hour}:${minute}.`)
: hour >= 18 && hour < 24 ? console.log(`Boa noite! São ${hour}:${minute}.`)
: console.log(`Horário inválido.`);

// 10.
let wage = parseFloat(prompt(`Digite o salário:`));
let installment = parseFloat(prompt(`Digite a parcela do empréstimo:`));
if (installment <= 0.3 * wage) {
    console.log(`Aprovado!`);
} else {
    console.log(`Reprovado!\nA parcela máxima é de R$${(wage * 0.3).toFixed(2)}`);
}

// 11.
let gb_usage = Number(prompt(`Digite quantos GB são usados por mês:`));
gb_usage >= 14 && gb_usage <= 20 ? console.log(`A melhor opção é a A, já que vai usar ${gb_usage}GB.\nA partir de 14GB o valor adicional cobrado é mais de R$27,00, já que não serão usados mais de 20GB o plano A é o melhor.\nCom o plano B, ficaria R$${((gb_usage-5)*3+30).toFixed(2)}`)
: gb_usage > 20 ? console.log(`O único plano que pode dar mais de 20GB é o B. custando R$${((gb_usage-5)*3+30).toFixed(2)} com o adicional incluso.`)
: gb_usage > 5 && gb_usage < 14 ? console.log(`A melhor opção é a B, já que vai usar ${gb_usage}GB o custo total ficará R$${((gb_usage-5)*3+30).toFixed(2)}, vai economizar R$${(55-((gb_usage-5)*3+30)).toFixed(2)}`)
: console.log(`O plano B é a melhor opção.\nApenas ${gb_usage}GB serão usados, dessa forma, custando R$30.00, vai economizar R$${(55 - 30).toFixed(2)}`);

// 12.
let urgency = Number(prompt("Digite o nível da urgência de 1 à 3, 3 sendo o mais urgente:"));
let impact = Number(prompt("Digite o nível do impacto de 1 à 3, 3 sendo o mais grave:"));

urgency + impact == 6 ? console.log(`Classificação: P1 Crítico.`)
: urgency + impact == 5 ? console.log(`Classificação: P2 Alto.`)
: urgency + impact == 3 && urgency + impact == 4 ? console.log(`Classificação: P3 Médio.`)
: urgency + impact == 2 ? console.log(`Classificação: P4 Baixo.`)
: console.log(`Dados inválidos.`);

// 13.
let grade1 = parseFloat(prompt(`Digite uma nota:`));
let grade2 = parseFloat(prompt(`Digite outra nota:`));
let attendance = Number(prompt(`Digite a frequência em porcentagem:`));

if (attendance >= 90) {
    let average = ((grade1 + grade2)/2)+ 0.5
    average >= 10 ? console.log(`Média: 10, Aprovado.`)
    : average >= 6 ? console.log(`Média: ${average}, Aprovado.`)
    : console.log(`Média: ${average}, Reprovado.`);
} else if (attendance >= 75) {
    let average = (grade1 + grade2)/2
    average >= 10 ? console.log(`Média: 10, Aprovado.`)
    : average >= 6 ? console.log(`Média: ${average}, Aprovado.`)
    : console.log(`Média: ${average}, Reprovado.`);
} else {
    console.log(`Média: ${average}, Reprovado por ausência.`);
}

// 14.
let input = prompt()

if (input == null) {    // Não houve mudança entre == e === com null
    console.log(`Operação cancelada`);
} else if (input === "") {
    console.log(`Nada foi digitado`);
} else if (isNaN(input)) {
    console.log(`Valor inválido`);
} else {
    console.log(input * 2);
}