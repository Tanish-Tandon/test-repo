// const user={

// const { startTransition } = require("react")

//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

//  const image=document.querySelector('img')
//  const button=document.querySelector('button')
// fetch('https://dog.ceo/api/breeds/image/random')
//       .then((response) => response.json())
//       .then(json => {
//     image.src=json.message
   
//       })



//       button.addEventListener('click',()=>{
//         const image=document.querySelector('img')
//  const button=document.querySelector('button')
// fetch('https://dog.ceo/api/breeds/image/random')
//       .then((response) => response.json())
//       .then(json => {
//     image.src=json.message
   
//       })
//       })
  

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



const image=document.querySelector('img')
const button =document.querySelector('button')


button.addEventListener('click',()=>{
    const xhr=new XMLHttpRequest()
    console.log(xhr);


    xhr.responseType='json'

    xhr.addEventListener('load',()=>{
        // console.log(JSON.parse(xhr.response));

         console.log(xhr.response);

         image.src=xhr.response.message
         console.log(xhr);
    
    })





    xhr.onload=()=>{
        // console.log(JSON.parse(xhr.response));
        // image.src=xhr.response.message

        //  console.log(xhr.response);

        //  image.src=xhr.response.message
         console.log(xhr);
    } 

   xhr.open('GET','https://dog.ceo/api/breeds/image/random',true)
    xhr.send()
})
setTimeout(()=>{
    console.log('hii')
},6000)

function sayHi(){
    console.log('HI')
}


// alert('hello')




// const startTime=Date.now()
// let currentTime=startTime

// while(startTime+2000>currentTime){
//     currentTime=Date.now() 
// }



const blockingBtn=document.querySelector('.blocking-btn')
    blockingBtn.addEventListener('click',()=>{
    const startTime=Date.now()
    let currentTime=startTime

    while(startTime+9000 > currentTime){
        currentTime=Date.now()
    }
})

