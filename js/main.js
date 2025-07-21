//inicio del carrusel-----------------------------------

const btnAdelante = document.getElementById("adelante")
const btnAtras = document.getElementById("atras")
const caras = document.querySelectorAll(".cara")

let index = 0
let videoPrincipal = null

window.addEventListener("load", () => {
    videoPrincipal = caras[0].querySelector("video")
    if (videoPrincipal) {
        videoPrincipal.loop = true
        videoPrincipal.play()
    }
})

function mostrarCara(i) {
    caras.forEach(cara => cara.classList.remove("activa"))
    caras[i].classList.add("activa")
    document.querySelector(".caras").style.transform = `translateX(-${i * 100}%)`

    const videos = document.querySelectorAll(".cara video")
    videos.forEach(video => {
        video.pause()
    })

    const videoActivo = caras[i].querySelector("video")
    if (videoActivo) {
        videoActivo.currentTime = 0
        videoActivo.play()
    }
}

btnAtras.addEventListener("click", () => {
    index = (index === 0) ? caras.length - 1 : index - 1
    mostrarCara(index)
})

btnAdelante.addEventListener("click", () => {
    index = (index === caras.length - 1) ? 0 : index + 1
    mostrarCara(index)
})

//fin del carrusel------------------------------------------