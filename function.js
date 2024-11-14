// function ak() {
//     document.write("Ananthu","<br>")   
// }
// ak()
// ak()
// ak()
// ak()
// ak()
// ak()


// function ak(n1) {
//     document.write("Helllo ",n1,"<br>")
// }
// ak("Ananthu")
// ak("Ajmal")


// function name(n1,n2) {
//     document.write(n1+n2,"<br>")
// }
// name(5,8)
// name(10,16)

// function fact(n1) {
//     var factor=1
//     for(var i=1;i<=n1;i++){
//         factor*=i;
//     }
//     document.write("Factorial of  ",n1 ," is ",factor,"<br>")
    
// }
// fact(3)
// fact(5)
// fact(6)



// function hello(a) {
//     for(var i=1;i<=a;i++){
//         document.write("HELLO WORLD","<br>")
//     }
   
// }
// hello(6)


// RETURN FUNCTION   --- It is used to store 


// function sum(n1,n2) {
//     return n1+n2
// }
// sum(2,3)





//////////////////////// ------- ---   TASK


let a=parseInt(prompt("Enter Your Mark:"))
if((a>=90)&&(a<=100)){
    document.write("A+")
}
else if((a>=80)&&(a<=89)){
    document.write("A")
}
else if((a>=70)&&(a<=79)){
    document.write("B+")
}
else if((a>=60)&&(a<=69)){
    document.write("B")
}
else if((a>=50)&&(a<=59)){
    document.write("C+")
}
else if((a>=40)&&(a<=49)){
    document.write("C")
}
else{
    document.write("Failed")
}