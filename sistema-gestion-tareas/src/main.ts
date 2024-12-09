
const form = document.querySelector(".añadir-tarea") as HTMLFormElement
const formInputs = Array.from(document.querySelectorAll(".añadir-tarea input")) as HTMLInputElement[]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const getValueOf = (name: string) => formInputs
        .find(i => i.getAttribute("name") === name)
        ?.value

    añadirTarea({
        titulo: getValueOf("titulo") ?? "sin titulo",
        duracion: parseInt(getValueOf("duracion") ?? "10"),
        estado: "pendiente"
    })
})





interface Tarea {
    titulo: string,
    duracion: number,
    estado: "pendiente" | "completado"
}

function añadirTarea(tarea: Tarea) {
    const tareasElement = document.querySelector(".tareas") as HTMLDivElement

    const nuevaTareaInput = document.createElement("li")
    nuevaTareaInput.innerHTML = `
        <p class="titulo">${tarea.titulo}</p>
        <p class="duracion">${tarea.duracion}</p>
        <p class="estado">${tarea.estado}</p>
    `

    tareasElement.appendChild(nuevaTareaInput)

    setTimeout(
        () => tareasElement.removeChild(nuevaTareaInput),
        tarea.duracion * 1000
    )

    nuevaTareaInput.addEventListener("subtract-second", () => {
        nuevaTareaInput.innerHTML = nuevaTareaInput.innerHTML
            .split("\n")
            .map(line => line.includes(`class="duracion"`)
                ? `<p class="duracion">${tarea.duracion}</p>`
                : line)
            .join("\n")
    })
    setInterval(
        () => {
            tarea.duracion = tarea.duracion - 1
            nuevaTareaInput.dispatchEvent(new Event("subtract-second"))
        },
        1 * 1000
    )
}




