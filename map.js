// var a=[1,5,7,9]
// var b=[]
// for(i=0;i<a.length;i++){
//     b[i]=a[i]*2
// }
// console.log(a)
// console.log(b)



// var a=[5,6,1,8]
// var b=a.map(function(num){                                       /// Map Function
//     return num*2
// })
// console.log(a)
// console.log(b)



var a=[5,6,1,8]
var b=a.filter(function(num){
    return num%2==0                                              /// Filter
})
console.log(a)
console.log(b)




var a=[5,6,1,8]
var b=a.reduce(function(num,acc){
    return acc*num                                               /// Reduce
},1)
console.log(a)
console.log(b)



var a=[5,6,1,8]
var b=a.filter(num=>num>3)                                          /// To Arrow Function
console.log(a)
console.log(b)