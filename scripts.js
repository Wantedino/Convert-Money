const button = document.getElementById('myButton');
const options = document.getElementById('selecao')

const converter = async () => {
    const inputReal = document.getElementById('realholder').value
    const realDesejado = document.getElementById('realdesejado')
    const dolarDesejado = document.getElementById('dolardesejado')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realDesejado.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReal)

    if (options.value === "US$ Dólar americano") {
        dolarDesejado.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputReal / dolar)
    }
    if (options.value === "€ Euro") {
        dolarDesejado.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputReal / euro)
    }
    if (options.value === "Bitcoin") {
        dolarDesejado.innerHTML  = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'BTC', 
            minimumFractionDigits: 8 }
        ).format((inputReal / bitcoin))
    }
}


const mudarMoeda = () => {
    const trocarNomeMoeda = document.getElementById('trocanome')
    const trocarImgMoeda = document.getElementById('trocaimg')

    if (options.value === 'US$ Dólar americano') {
        trocarNomeMoeda.innerHTML = "Dólar americano"
        trocarImgMoeda.src = "./img/dolar.png"
    }


    if (options.value === '€ Euro') {
        trocarNomeMoeda.innerHTML = "Euro"
        trocarImgMoeda.src = "./img/euro.png"
    }

    if (options.value === 'Bitcoin'){
        trocarNomeMoeda.innerHTML = "Bitcoin"
        trocarImgMoeda.src = "./img/bitcoin.png"
    }
    converter()
}


button.addEventListener('click', converter);
options.addEventListener('change', mudarMoeda)