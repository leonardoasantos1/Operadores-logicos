# Documentação da Função: Verificando Divisibilidade por 3 e 5 ao Mesmo Tempo

## Objetivo
A função `isDivisibleByThreeAndFive` tem como objetivo determinar se um número é divisível por 3 e 5 ao mesmo tempo.

## Parâmetros
- `number`: Um número inteiro a ser verificado quanto à sua divisibilidade por 3 e 5 simultaneamente.

## Retorno
A função retorna `true` se o número for divisível por 3 e 5 ao mesmo tempo. Caso contrário, retorna `false`.

## Funcionamento
1. A função calcula o resto da divisão do número por 3 utilizando o operador `%`.
2. Verifica se o resto da divisão por 3 é igual a zero.
3. Calcula o resto da divisão do número por 5 utilizando novamente o operador `%`.
4. Verifica se o resto da divisão por 5 também é igual a zero.
5. Se ambos os restos forem zero, a função retorna `true`, indicando que o número é divisível por 3 e 5 ao mesmo tempo.
6. Caso contrário, a função retorna `false`.

## Exemplos de Uso
```javascript
console.log(isDivisibleByThreeAndFive(15));  // Saída: true
//Explicação: 15 é divisível por 3 e 5, pois o resto da divisão por 3 e por 5 é zero.
console.log(isDivisibleByThreeAndFive(9));   // Saída: false
//Explicação: 9 é divisível por 3, mas não por 5, então a função retorna false.
console.log(isDivisibleByThreeAndFive(25));  // Saída: false
//Explicação: 25 não é divisível nem por 3 nem por 5, então a função retorna false.
