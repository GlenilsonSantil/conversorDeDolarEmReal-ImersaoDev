function converter() {
    const dolar = document.getElementById('dolar').value
    const real = dolar * 5.50
    alert("Conversão realizada com dólar á R$5.50")
    document.getElementById("real").innerHTML ="R$" + real.toFixed(2)
}
//_____Revisão_____
//variáveis = var (int - float - sting)
//alert = cria um pop-up com informação na tela
//prompt = cria um pop-up com campo de inserção de dados
//ParseInt = transforma string em inteiro
//parseFloat = transforma string em flutuante
//operações + somar * multiplicar
// + em alguns casos concatena dois ou mais elementos

