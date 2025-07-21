const portafolio = document.querySelector(".portafolio")
const inicio = document.querySelector(".inicio")
const tecnologias = document.querySelector(".tecnologias")
const proyecto = document.querySelector(".proyectos")
const contacto = document.querySelector(".contacto")
const sol = document.querySelector(".sol")
const luna = document.querySelector(".luna")
const tema = document.querySelector(".iconosTema")
const body = document.querySelector("body")
const bandera = document.querySelector(".bandera")
const listaIdiomas = document.querySelector(".listaIdiomas")
const idioma = document.querySelectorAll(".idioma")
const idiomaSeleccionado = document.querySelector(".idiomaSeleccionado")
const iconoMenu = document.querySelector(".iconoMenu")
const secciones = document.querySelector(".secciones")

tema.addEventListener("click", ()=>{
  body.classList.toggle("light")
})
bandera.addEventListener("click", ()=>{
  listaIdiomas.classList.toggle("toggle")
})
const opcionesArray = Array.from(idioma)
opcionesArray.forEach((idioma)=>{
  idioma.addEventListener("click",() =>{
    listaIdiomas.classList.remove("toggle")
    const esIN = idioma.getElementsByTagName('span')[0].textContent.toLowerCase()
    estableceIdioma(esIN)
  })
  })

  function estableceIdioma(idiomaSeleccionado){
    bandera.getElementsByTagName("img")[0].src=`banderas/${idiomaSeleccionado}.svg`
    switch(idiomaSeleccionado) {
      case "español":
        portafolio.textContent = "Portafolio";
        inicio.textContent = "Inicio";
        tecnologias.textContent = "Tecnologías";
        proyecto.textContent = "Proyectos";
        contacto.textContent = "Contacto";
        document.title = "Portafolio - Español";
        break;
      case "english":
        portafolio.textContent = "Portfolio";
        inicio.textContent = "Home";
        tecnologias.textContent = "Technologies";
        proyecto.textContent = "Projects";
        contacto.textContent = "Contact";
        document.title = "Portfolio - English";
        break;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    switch (navigator.language) {
      case "es-ES":
        estableceIdioma("español");
        break;
      case "en-US":
        estableceIdioma("english");
        break;
      default:
        estableceIdioma("español");
    }
  });

iconoMenu.addEventListener("click", () => {
  secciones.classList.toggle("menuActivo");
});