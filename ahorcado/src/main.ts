
const palabra = document.querySelector(
    ".palabra"
) as HTMLParagraphElement;
const letraIntentoInput = document.querySelector(
    ".letra-intento"
) as HTMLInputElement;
const botonComprobarLetra = document.querySelector(
    ".boton-comprobar-letra"
) as HTMLButtonElement;
const ahorcadoImagen = document.querySelector(
    ".imagen"
) as HTMLDivElement;
const checkWinnerElement = document.querySelector(
    "#checkWinner > p"
) as HTMLParagraphElement;



const partida = {
    palabraSecreta: "tomate",
    letrasIntentos: [] as string[],
};

partida.palabraSecreta = window.prompt("Introduce una palabra") ?? "tomate"

palabra.textContent = partida.palabraSecreta
    .split("")
    .map(letter => "_")
    .join("");


botonComprobarLetra.addEventListener("click", () => {
    let nuevaLetra = letraIntentoInput.value;
    if (nuevaLetra.length != 1) return;

    partida.letrasIntentos.push(nuevaLetra);

    if (partida.palabraSecreta.includes(nuevaLetra)) {
        showHiddenLetters(nuevaLetra);
    } else {
        incrementFailCounter();
    }

    letraIntentoInput.value = "";
    checkWinner();
});








function showHiddenLetters(nuevaLetra: string) {
    const letrasSecretas = Array.from(partida.palabraSecreta)

    palabra.textContent = palabra.textContent
        ?.split("")
        .map((previousLetter, index) =>
            nuevaLetra === letrasSecretas[index] ? nuevaLetra : previousLetter)
        .join("") ?? "";
}


function incrementFailCounter() {
    const errores = ahorcadoImagen.getAttribute(`data-errores`) as string;
    let updatedCount = Number.parseInt(errores) + 1;
    ahorcadoImagen.setAttribute("data-errores", updatedCount.toString());
}


function checkWinner() {
    if (ahorcadoImagen.getAttribute("data-errores") === "6") {
        checkWinnerElement.textContent = "Has perdido";
    }

    if (palabra.textContent?.includes("_") === false) {
        checkWinnerElement.textContent = "Has ganado"
    }
}
