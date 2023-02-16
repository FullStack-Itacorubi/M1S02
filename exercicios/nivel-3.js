// Ex 7 - Cálculo de estimativa de tempo

// Crie um programa com JavaScript que a partir de um salário inicial, calcule quantos meses será necessário para atingir uma meta salarial recebendo um aumento a cada 6 meses equivalente a 10% no salário corrente.

// Para executar esse exercício você provavelmente vai precisar saber usar: estrutura de repetição, estrutura condicional, operador Remainder (%), operadores aritméticos (divisão, multiplicação e soma);

// Um adicional será formatar o valor numérico para real.

let salarioAtual = 2500;
let mes = 1;
let metaSalario = 8000;

let BrazilianReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

while (salarioAtual < metaSalario) {
  mes++;

  if (mes % 6 == 0) {
    salarioAtual = salarioAtual + salarioAtual * 0.1;
    console.log(
      `No mês ${mes} recebi um aumento de 10%. Agora meu salário é ${BrazilianReal.format(
        salarioAtual
      )}`
    );
  }
}

console.log(
  `Levei ${mes / 12} anos pra chegar ao salário de ${BrazilianReal.format(
    salarioAtual
  )}`
);
