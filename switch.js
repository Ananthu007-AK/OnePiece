// var a="C";
// switch(a){
//     case "A":
//         document.write("Cat");
//         break;
//     case "B":
//         document.write("Bat");
//         break;
//     case "C":
//         document.write("Goat");
//         break;
//     default:
//         document.write("Invalid Character");
//         break;        
// }


a=parseInt(prompt("Enter the first No."))
b=parseInt(prompt("Enter the second No."))
c=prompt("+,-,*,/")
switch(c){
    case "+":
        document.write(a+b);
        break;
    case "-":
        document.write(a-b);
        break;
    case "*":
        document.write(a*b);
        break;
    case "/":
        document.write(a/b);
        break;
    default:
        document.write("Invalid");
        break;
                            
}




