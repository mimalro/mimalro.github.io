let darkmode = localStorage.getItem('darkmode')
const tema = document.getElementById('tema')

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

tema.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})


let slideIndex = 1
mostrarImg(slideIndex)

function controle(n){
    mostrarImg(slideIndex += n);
}

function imagemAtual(n){
    mostrarImg(slideIndex = n)
}

function mostrarImg(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}