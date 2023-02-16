// [M1S02] Ex 6 - Uso de operadores lógicos
// Resolva o problema abaixo com JavaScript.

// Um evento de tecnologia está acontecendo na cidade e você fará o sistema para gerir a venda de ingressos. A regra é a seguinte: mulheres pagam R$ 50 reais na entrada, enquanto homens pagam R$ 80 reais, para pessoas com mais de 60 anos ou estudantes do LAB365 a entrada é gratuita mas se a pessoa for menor de idade e não for estudante de programação não deve entrar;

// Nesse exercício você fará uso de operadores lógicos, condicionais if/else;

var gender = 'female'; // or male
var age = 18;
var isLab365Student = true;

var isNotPermittedEntry = age < 18 && !isLab365Student;
var isFreeEntry = age > 60 || isLab365Student;

if (isNotPermittedEntry) {
  window.alert(
    'A entrada não é permtida para menores de idade que não forem estudantes do LAB365.'
  );
} else if (isFreeEntry) {
  window.alert('Parabéns! Você não precisa pagar entrada');
} else if (gender == 'male') {
  window.alert('Bem vindo ao evento! Seu ingresso custa R$ 80,00.');
} else {
  window.alert('Bem vinda ao evento! Seu ingresso custa R$ 50,00.');
}
