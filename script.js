document.addEventListener("DOMContentLoaded", () => {
    console.log("Tarjeta profesional cargada.");
});

let pos = 0;
setInterval(() => {
    pos++;
    document.body.style.backgroundPosition = `${pos}px 0`;
}, 30); // cada 30ms, ajusta según velocidad deseada