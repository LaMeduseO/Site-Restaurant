let underline = document.querySelectorAll('.underline')
let triggerBox = document.querySelectorAll('.button-box')
let nav = document.querySelector('nav')
let button = document.querySelectorAll('.nav-button')

function transition(currentLine) {

    currentLine.style.width = '100%'
}

function transitionBack(currentLine) {
    setTimeout(()=>{currentLine.style.width = '0%'}, 400)
}


for(let i = 0; i<triggerBox.length;i++) {
    triggerBox[i].addEventListener("mouseover", transition.bind(null, underline[i]))
    triggerBox[i].addEventListener("mouseleave", transitionBack.bind(null, underline[i]))
}

function ChangeTextColor(){
    button.forEach((e)=>{e.style.color="var(--couleur-Smoky-Brown)"})
}

function BackTextColor(){
    button.forEach((e)=>{e.style.color="var(--couleur-Creamy-Beige)"})
}

nav.addEventListener("mouseover", ChangeTextColor)
nav.addEventListener("mouseleave", BackTextColor)

/*triggerBox.addEventListener("mouseover", transition)
triggerBox.addEventListener("mouseleave", transitionBack)*/

