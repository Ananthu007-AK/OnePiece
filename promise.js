                                                   ///  PROMISE  ///

    
    /// promise is an object which represents eventual completion or failure of an asynchronous operation.



// var myPromise = new Promise(function(resolve,reject){

//     var success=false
//     if(success){
//         resolve("Data got after the async process")                  /// Promise Creation
//     }
//     else{
//         reject("Promise rejected")
//     }
// })



// myPromise
//     .then((data)=>{
//         console.log(data)
//     })                                                              /// Function Calling
//     .catch((error)=>{
//         console.log(error)
//     })



    
// var myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     var success=true
//     if(success){
//         resolve("Data got after the async process")                  /// Promise Creation
//     }
//     else{
//         reject("Promise rejected")
//     }
// },5000)
// })



// myPromise
//     .then((data)=>{
//         console.log(data)
//     })                                                              /// Function Calling
//     .catch((error)=>{
//         console.log(error)
//     })

                                    

                                                                /// Example


// var akPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         var success=true
//         if(success){
//             resolve("ANANTHU")
//         }
//         else{
//             reject("Nothing")
//         }
//     },3000)
// })

// akPromise
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })




                                                /// Promise States  /// 


                                                /// 1. Pending
                                                /// 2. Settled
                                                ///           -resolve/fulfilled/success
                                                ///           -reject/failure