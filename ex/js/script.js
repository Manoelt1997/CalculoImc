// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu resultado de IMC foi de ${imc} (${nivelImc})`
    setResultado(msg, true);
});

// Função para avaliação de resultado

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if(imc >= 39.9){
        return nivel[5];
    } if (imc >= 34.9){
        return nivel[4];
    } if (imc >= 29.9){
        return nivel[3];
    } if (imc >= 24.9){
        return nivel[2];
    } if (imc >= 18.5){
        return nivel[1];
    } if (imc < 18.5){
        return nivel[0];
    }
}


// Função para criar o IMC

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
}


// Função para criar o parágrafo
function criaP() {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado') // adiciona uma classe
    return p;
}
// Mostrar o resultado na tela

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if(isValid) {
     p.classList.add('paragrafo-resultado')   
    } else {
        p.classList.add('paragrafo-erro')
    }
    p.innerHTML = msg
    resultado.appendChild(p);
}
