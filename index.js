const modoNoturno = document.getElementById("modoNoturno");
const body = document.querySelector("body");

modoNoturno.addEventListener("click", () => {
    const modo = modoNoturno.checked ? "dark" : "light";
    body.setAttribute("data-bs-theme", modo)
})