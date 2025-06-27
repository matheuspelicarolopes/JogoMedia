function iniciarJogo() {
  // 1. Perguntar a quantidade de números
  let quantidadeStr = prompt(
    "Quantos números você deseja inserir para calcular a média?"
  );
  let quantidade = parseInt(quantidadeStr);

  // Validação da entrada da quantidade
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, digite um número válido e maior que zero.");
    return; // Encerra a função se a entrada for inválida
  }

  let soma = 0;
  let numerosDigitados = [];

  // 2. Pedir cada número em um loop
  for (let i = 0; i < quantidade; i++) {
    let numeroStr = prompt(`Digite o ${i + 1}º número:`);
    let numero = parseFloat(numeroStr);

    // Validação de cada número digitado
    if (isNaN(numero)) {
      alert(
        "Entrada inválida. Por favor, digite apenas números. Tente novamente."
      );
      i--; // Decrementa o contador para pedir o mesmo número novamente
      continue; // Pula para a próxima iteração
    }

    soma += numero;
    numerosDigitados.push(numero);
  }

  // 3. Calcular a média
  const media = soma / quantidade;

  // 4. Mostrar o resultado na tela
  const elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = `
                <p>Você digitou os números: ${numerosDigitados.join(", ")}</p>
                <p>A média é: <strong>${media.toFixed(2)}</strong></p>
            `;
}
