// const regexp=/cat/i                                      /// i - insensitivie 
// const regexp=/[0-9,a-z]at/                               /// [] - Multiple conditions
// const result=regexp.test("this is cat")
// const res=regexp.test("this is 007 bat")
// console.log(result)
// console.log(res)




// const regexp=/^cat/i

// const str1="cat is cat"
// const str2="this is rat"
// const str3="this is bat"

// var r1=regexp.test(str1)                                  /// ^ - String starting
// console.log(r1)

// var r2=regexp.test(str2)
// console.log(r2)

// var r3=regexp.test(str3)
// console.log(r3)



// const regexp=/cat$/i

// const str1="cat is cat"
// const str2="this is rat"
// const str3="this is bat"

// var r1=regexp.test(str1)                                    /// $ - String ending
// console.log(r1)

// var r2=regexp.test(str2)
// console.log(r2)

// var r3=regexp.test(str3)
// console.log(r3)


const regexp=/cats?/i

const str1="cat is cat"
const str2="this is cats"
const str3="this is bat"

var r1=regexp.test(str1)                                    /// ? - cat & cats to be true
console.log(r1)

var r2=regexp.test(str2)
console.log(r2)

var r3=regexp.test(str3)
console.log(r3)
