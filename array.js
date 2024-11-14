
// var fruit=["a","b","c"]
// console.log(fruit)
// document.write(fruit)


// var animal=["Lion","Tiger","Dog"]
// console.log(animal[1])
// animal[1]="Cat"
// console.log(animal.length)        //////   -- Array length --


var animal=["Cat","Tiger","Dog","Elephant"]
var x=animal.length
for(var i=0;i<x;i++){
    console.log(animal[i])
}

// var animal=["Cat","Tiger","Dog","Elephant"]
// animal.push("Bat","Cheetah")                   ///   To Add a new value in the last of array
// animal.shift()                                 ///   To delete first element of the array
// animal.pop()                                   ///   To delete last element of the array
// animal.splice(2,3)                             ///   To delete from a index value to another index value
// animal.sort()                                  ///   To sort elements in alphabetical order
// console.log(animal)



///////////  LARGEST IN THE ARRAY


var num=[10,60,77,90,80]
var large=num[0]
// console.log(num[1]+num[2])                        /// To add two values
for(var i=0;i<num.length;i++){
    if(num[i]>large){
        large=num[i]
    }
}
console.log(large)
