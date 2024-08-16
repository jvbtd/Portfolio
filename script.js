let modo = document.getElementById("modo")
let body = document.querySelector("body")
let header = document.querySelector("header")
let footer = document.querySelector("footer")
 
modo.addEventListener("click", ()=>{    
    modo.classList.toggle("dark")
    body.classList.toggle("dark")
    header.classList.toggle("dark")
    footer.classList.toggle("dark")
})
