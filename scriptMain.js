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


const text = "Projeto Portifólio"
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }

}

window.onload = typeWriter;

window.addEventListener('scroll', function() {
    const elements = this.document.querySelectorAll('.animate-on-scroll');

    elements.forEach(function(element){
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    })
})