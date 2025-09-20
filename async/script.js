
//FULFILLED
// async function makeRequest(){
//     return 'hello'
// }




//SHOW ERROR 
// function hi(){
//     console.log('hello');

//     // throw 'error in program'

//     throw new Error('error in program') 

//     console.log('Hii');
// }



//PROMISE REJECTED
// async function makeRequest() {
//     throw new Error('error in program')
// }



// async function makeRequest() {
//    const url='https://dummyjson.com/products/?sleep=6000'

//    const responsePromise=fetch(url)
//    responsePromise.then((res)=>res.json())
//    .then((data)=>{
//     console.log(data);
//    })



// }
// // makeRequest()




// async function makeRequest() {
//     const url='https://dummyjson.com/products/?sleep=9000'

//     const response=await fetch(url)
//     console.log(response) 
//     console.log('HII')
    
// }

// makeRequest()





// async function makeAsyncRequest() {
//     const url='https://dummyjson.com/products/?sleep=9000'

//     const response=await fetch(url)
//     console.log(response) 
//     console.log('HII')
    
// }

// function addTwoNumbers(){
//     return 5+6
// }





//promise data we can access
//  async function makeAsyncRequest() {
//     const url='https://dummyjson.com/products/?sleep=5000'

//     const response=await fetch(url)
//     const data=await response.json()
//     console.log(data)
//     console.log('HII')
    
// }
// makeAsyncRequest()





// async function makeAsyncRequest() {
//     const url='https://dummyjson.com/products/?sleep=5000'
// //data miljaega
//     const data=await(await fetch(url)).json()
//     // const data=await response.json()
//     console.log(data)
//     console.log('HII') 
    
// }
// makeAsyncRequest()  



// async function makeAsyncRequest() {
    

//     const url='https://dummyjson.com/products/?sleep=5000'

//     const response=await fetch(url)
//     const data=await response.json()
//     return data
//     // console.log(data)
//     console.log('HII')

// }
// makeAsyncRequest()




// async function makeAsyncRequest() {
    

//     const url='https://dummyjson.com/products/?sleep=5000'

//     const response=await fetch(url)
//     const data=await response.json()
//     return data
//     // console.log(data)
//     console.log('HII')

// }
// //data pass KARNA
// makeAsyncRequest().then(console.log)




