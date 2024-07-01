const button = document.getElementById('myButton');
const options = document.getElementById('selecao')

const dolar = 5.6
const euro = 6

const converter = () => {
    const inputReal = document.getElementById('realholder').value
    const realDesejado = document.getElementById('realdesejado')
    const dolarDesejado = document.getElementById('dolardesejado')

    realDesejado.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReal)

    if(options.value === "US$ Dólar americano"){
        dolarDesejado.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputReal / dolar)
    
    }
    if(options.value ==="€ Euro"){
        dolarDesejado.innerHTML = new Intl.NumberFormat('en-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputReal / euro)
    }
}


const mudarMoeda = () =>{
    const trocarNomeMoeda = document.getElementById('trocanome')
    const trocarImgMoeda = document.getElementById('trocaimg')

    if (options.value === 'US$ Dólar americano'){
        trocarNomeMoeda.innerHTML = "Dólar americano"
        trocarImgMoeda.src = "./img/dolar.png"
    }


    if (options.value === '€ Euro'){
        trocarNomeMoeda.innerHTML = "Euro"
        trocarImgMoeda.src = "./img/euro.png"
    }
    converter()
}


button.addEventListener('click', converter);
options.addEventListener('change', mudarMoeda)