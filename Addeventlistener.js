// var a=document.getElementById("nb")
// var b=document.getElementById("hg")

// b.addEventListener("click",changecolor)                 ///   element.addEventListener(event,function)
// function changecolor(){
    // a.style.color="red"
// }

var a=document.getElementsByClassName("huy")
a[1].addEventListener("click",changecolor)
a[0].addEventListener("mouseover",background)
function changecolor(){
    a[0].style.color="blue"
}
function background(){
    a[0].style.backgroundColor="yellow"
}



// var press=document.getElementById("hy")
// function handlekeydown(event){
//     press.textContent=" You Pressed :" + event.key
// }
// document.addEventListener("keydown",handlekeydown)


// var press=document.getElementsByClassName("huy")
// function handlekeydown(event){
//     press[0].textContent=" You Pressed :" + event.key
// }
// press[0].addEventListener("keydown",handlekeydown)