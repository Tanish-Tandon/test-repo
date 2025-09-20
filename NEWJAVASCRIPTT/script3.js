//  const h1=document.querySelector('h1')
//  const input=document.querySelector('input')

//  h1.addEventListener('keypress',(e)=>{
//     console.log(e)
//  })



//  h1.addEventListener('keypress',(e)=>{
//     console.log(e.key)
//  })



 /// PRINT KEYS
//  input.addEventListener('keypress',(e)=>{
//     console.log(e.key)
//  })


//KEY AND VALUE 
// window.addEventListener('keypress',(e)=>{
//     console.log('code',e.code);
//     console.log('value',e.key); 
// })




//  h1.addEventListener('keyup',(e)=>{
//     console.log(e)
//  })




//  window.addEventListener('keyup',(e)=>{
//     console.log('code',e.code);
//     console.log('value',e.key); 
// })




//  window.addEventListener('keyup',(e)=>{
//     console.log('code',e.code);
//     console.log('value',e.key); 
// })



//  window.addEventListener('keyup',(e)=>{
//     console.log('code',e.code);
//     console.log('value',e.key); 
// })




//  window.addEventListener('keydown',(e)=>{
//     console.log('code',e.code);
//     console.log('value',e.key); 
// })




// const green=document.querySelector('.green');
// const pink=document.querySelector('.pink');
// const blue=document.querySelector('.blue');


// green.addEventListener('click',(e)=>{
//     // e.stopPropagation();
//     console.log('1.Green Event Listener'); 
// },{capture:true})

// green.addEventListener('click',(e)=>{
//     // e.stopPropagation();
//     console.log('1.Green Event Listener'); 
// },{once:true}

// pink.addEventListener('click',(e)=>{
//     console.log('2.Pink Event Listener'); 
// },true)  


// blue.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log('3.Blue Event Listener'); 
// },{capture:true,once:true})



// document.body.addEventListener('click',(e)=>{
//     console.log('4.Body Event Listener'); 
// },{capture:true})



// document.addEventListener('click',(e)=>{
//     console.log('5.Document Event Listener'); 
// },{capture:true})

// window.addEventListener('click',(e)=>{
//     console.log('6.Window Event Listener'); 
// },{capture:true})





// blue.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log('3.Blue Event Listener'); 
// },{capture:true,once:true})\



  const green=document.querySelector('.green');
  const pink=document.querySelector('.pink');
  const blue=document.querySelector('.blue');


  green.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('1.Green Event Listener')
  })



  pink.addEventListener('click',(e)=>{
    console.log('2.pink Event Listener')
  })



  blue.addEventListener('click',(e)=>{
    console.log('3.blue Event Listener')
  })


  document.body.addEventListener('click',(e)=>{
    console.loh('4.Body Event Listener')
  })

  document.addEventListener('click',(e)=>{
    console.log('5.Document Event Listener')
  })

  window.addEventListener('click',(e)=>{
    consoler.log('6.Window Event Listener')
  })

