const textarea = document.getElementById('textarea');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const textoCifrado = document.getElementById('texto-cifrado');
const btnCopiar = document.getElementById('btn-copiar');
const imgMuneco = document.getElementById('muneco');
const parrafo = document.getElementById('parrafo');

const claves = [
    ['e','enter'],
    ['i','imes'],
    ['a','ai'],
    ['o','ober'],
    ['u','ufat']
];

const encriptar = () => {
    const texto = textarea.value.toLowerCase();
    let textoEncriptado = texto;
    for (let i = 0; i < claves.length; i++) {
        const vocal = claves[i][0];
        const reemplazo = claves[i][1];
        textoEncriptado = textoEncriptado.replace(new RegExp(vocal, 'g'), reemplazo);
    }
    textoCifrado.textContent = textoEncriptado;
}

const desencriptar = () => {
    const textoEncriptado = textarea.value.toLowerCase();
    let textoDesencriptado = textoEncriptado;
    for (let i = 0; i < claves.length; i++) {
        const vocal = claves[i][0];
        const reemplazo = claves[i][1];
        textoDesencriptado = textoDesencriptado.replace(new RegExp(reemplazo, 'g'), vocal);
    }
    textoCifrado.textContent = textoDesencriptado;
}

const copiar = () => {
    let elementoTemporal = document.createElement("textarea");
    let textoACopiar = textoCifrado.textContent;  
    elementoTemporal.value = textoACopiar;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
}

btnEncriptar.addEventListener('click', () => {
    encriptar();
    btnCopiar.style.display = 'block';
    imgMuneco.style.display = 'none';
    parrafo.style.display = 'none';
    textarea.value = '';
});

btnDesencriptar.addEventListener('click', () => {
    desencriptar();
    btnCopiar.style.display = 'block';
    imgMuneco.style.display = 'none';
    parrafo.style.display = 'none';
    textarea.value = '';
});

btnCopiar.addEventListener('click', () => {
    copiar();
});

