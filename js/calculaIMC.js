let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

/* ==== CALCULO DO IMC AQUI =======*/
let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log('Peso inválido');
        pesoEhValido = false;
        tdImc.textContent = 'PESO INVÁLIDO!';
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaEhValida) {
        console.log('Altura inválido');
        alturaEhValida = false;
        tdImc.textContent = 'ALTURA INVÁLIDA!';
        paciente.classList.add('paciente-invalido');
    }
    if (alturaEhValida && pesoEhValido) {
        let IMC = calculaIMC(peso, altura);
        tdImc.textContent = IMC;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
