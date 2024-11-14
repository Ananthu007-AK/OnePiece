var a=document.getElementById("nm")
function handlekey(event){
    a.textContent=" You Pressed : " + event.key
}
document.addEventListener("keydown",handlekey)