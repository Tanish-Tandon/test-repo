
//pending

// const p=new Promise()=>{
    
// }





//resolve

// const p = new Promise((resolve,reject)=>{
//      resolve({name:'TANISH'})
// })



//reject

// const p=new Promise((resolve,reject)=>{
//     reject('PROMISE REJECTED')
// })




// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:'TANISH'})
//     },8000)
// })







const resolveBtn=document.querySelector('#resolve-btn')
const rejectBtn=document.querySelector('#reject-btn')


const p=new Promise((resolve,reject)=>{
    resolveBtn.addEventListener('click',()=>{
      resolve('Promise Resolved')
    })
    rejectBtn.addEventListener('click',()=>{
        reject('Promise Rejected')
    })
})


// p.then((data)=>{
//     console.log(data);
//     return 15
// }).then((data)=>{
//     console.log(data)
//     return 17
// }).then((data)=>{
//     console.log(data)
//     return 134
// }).catch((err)=>{
//     console.log(err)
// }).then(()=>{
//     console.log('object')
// })





console.log(p.then((data)=>{
    console.log(data);
    return 15
}).catch((err)=>{
    console.log(err);
}))


// p.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('Finally')
// }) 

// setTimeout(()=>{
//     console.log('hii')
// },4000)
