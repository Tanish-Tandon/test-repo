// const nums=[1,2,3,1,1,1]
// nums.reduce((accumulator,current)=>{
//     console.log(current);
// },89383)


//  const nums=[1,2,3,1,1,1]
// const sum=nums.reduce((accumulator,current,i)=>{
//    // console.log(i,current);
// //    console.log(accumulator);
//   // return accumulator+current
// //  console.log(accumulator)

// //    return current
// //    return 8
// // return accumulator+current

// return accumulator*current
// },0)


// const evenNumbers=[0,2,3,4,6,8,89,91]

// // const result=evenNumbers.some((num,i)=>{
// //    if(num%2==1){
// //     console.log(i)
// //    }
// //     return num%2===1
// // })



// const result=evenNumbers.some((num,i)=>{
//  return num%2===1
// })

// function add(){
//     console.log(arguments)
    

// }




// function add(){
//     console.log(arguments[0]);
//      console.log(arguments[1]);
//       console.log(arguments[2]);
//        console.log(arguments[3]);
//         console.log(arguments[4]);

    

// }

// function add(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]

//     }
//     return sum

// }




// const add=function add(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]

//     }
//     return sum

// }



// const add=()=>{
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]

//     }
//     return sum

// }


// const add=(...arguments)=>{
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]

//     }
//     return sum

// }





// function multiply(a,b){
//     return a*b
//}




// function multiply(a,b=1){
//     return a*b
// }

// function rollADie(numberofsides=6){
//     return Math.floor(Math.random()*numberofsides)+1;
// }


// function multiply(a,b=1){
//     debugger
//     return a*b
// }


// function rollADie(){
//     return Math.floor(Math.random()*6)+1;

// }



// const nums1=[1,2,3,4,5]
// const nums2=[5,6,7,8,9,10]
//  name='TANISH'

// // joinedArray=nums1.concat(nums2)
// const joinedArray=[...nums1,...nums2]



// // const user={
// //     name:'TANISH',
// //     age:34,

// // }

// // const joinedArray={...user,city:'NEWYORK'}




// function add(){
//     console.log(arguments)
//    let sum=0

//    for(let i=0;i<arguments.length;i++){
//     sum=sum+arguments[i]
//    }
//    return sum;
//}


// let obj1={name:'TANIHSH',age:45}
// let obj2={name:'MANISH',age:32}
// console.log({...obj1},{...obj2})



//  const nums1=[1,2,3,4,5,6]
// //rest parameters 
//  function add(a,b,...nums){
//     console.log(a,b)
//     console.log('nums:',nums);
//     let sum=0 
//     for(let i=0;i<nums.length;i++){
//         sum=sum+nums[i]
//     }
//     return sum
//  }
// //spread operator
// const result=add(3,4,8)



// const nums1=[1,2,3,4,5,6,7,8]
// function add(...nums){
//     return nums.reduce((acc,curr)=>acc+curr)
// }
//     // const result=add(8,9,56,898,76)

//     const result=add(...nums1)


//REST
// function showNumbers(...nums){
//     console.log(...nums);
// }
// showNumbers(1,2,3,4,5,6)


// //SPREAD
// const a=[first,second,...others]=[10,20,30,40,50]
// console.log(first)
// console.log(second)
// console.log(others)



//  const colors=['red','green','blue','pink','king']

// // const[color1,color2,color3]=colors

// // const[,,,color3]=colors

// const user={
//     name:'TANISH',
//     age:23,
//     address:{
//         city:'Agra',
//         state:'CHIEF'
//     },

// }
// // // const {name:username,age:userAge}=user


// // const{address:{city}}=user



// // function intro(userObj){
// //     console.log(userObj)


// // }
// // intro(user)

// // function printColor(colorsArray){
// //     console.log(colorsArray)
// // }

// // // printColor(colors)




// function printColor(a,b,c){
//     console.log(a,b,c)
// }

// printColor(colors)

//location.reload()

// setTimeout(()=>{
//     location.reload()
// },2000)

//  console.log('TANISH')
// // location.href='https://www.spacex.com/'

//  console.log('TANISH')
 //Location.href='hhtps://developer.morzilla.org/en-US/'

//  function openPage() {
//   window.open("https://www.spacex.com/",'resizable');  
// //   window.open('https://youtube.com/','procodrr')


//  }

//  const container=document.querySelector('.container')

//  const imgContainer=document.createElement('div')
//  imgContainer.classList.add('img-container')

//  const newImage=document.createElement('img')
// newImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';


// const paragraph=document.createElement('p')
// paragraph.innerText=10

// imgContainer.append(newImage)

            

// for(let i=0;i<=10;i++){

//      const imgContainer=document.createElement('div')
//  imgContainer.classList.add('img-container')

//  const newImage=document.createElement('img')
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;


// const paragraph=document.createElement('p')
// paragraph.innerText=i

// imgContainer.append(newImage,paragraph)
// container.append(imgContainer)




// }







// const container = document.querySelector('.container');

// for (let i = 0; i <= 991; i++) {
//   const imgContainer = document.createElement('div');
//   imgContainer.classList.add('img-container');

//   const newImage = document.createElement('img');
//   // Use valid sprite URL
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`;

//   const paragraph = document.createElement('p');
//   paragraph.innerText = i;

//   imgContainer.append(newImage, paragraph);
//   container.append(imgContainer);
// }




//////METHODS FOR IMAGES


// const container=document.querySelector('.container')

// for(let i=0;i<=100;i++){
//     const imgContainer=document.createElement('div');
//     imgContainer.classList.add('img-container');


//     const myHTML=`
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png";
//     <p>${i+1}</p>  `

//     imgContainer.innerHTML=myHTML

//     container.append(imgContainer)



///BOTHY METHODS ARE CORRECT FOR IMAGE VIA HTML AND JS
     


     


//     const newImage=document.createElement('img');
//    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`;



//    const paragraph=document.createElement('p');
//    paragraph.innerText=i;

//    imgContainer.append(newImage,paragraph);
//    container.append(imgContainer);


//}





//  const container=document.querySelector('.container')

// for(let i=1;i<=100;i++){
//     const imgContainer=document.createElement('div')
//     imgContainer.classList.add('img-container')


//     const myHTML=`
//      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png";
//    <p>${i}</p> `


//    imgContainer.innerHTML=myHTML


//    container.append(imgContainer)
// }








//  const container=document.querySelector('.container')


// let myHTML = ``;

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" />
//       <p>${i}</p>
//     </div>
//   `;
// }

// container.innerHTML = myHTML;





// const  container=document.querySelector('.container')

// let myHTML=``;

// for(let i=0;i<=234;i++){
//     myHTML+=`
//     <div class="tan-container">
//       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png" />
//       <p>${i+1}</p>
//     </div>
//     `;
// }


// container.innerHTML=myHTML;





// const container=document.querySelector('.tanish')

// let myHTML=``;

// for(let i=0;i<=100;i++){
//     myHTML+=`
//     <div class="tanish-container">
//      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png" />

//      <p>${i+1}</p>
//      </div>
//     `
// }

// container.innerHTML=myHTML;






// const container=document.querySelector('.container')

// // let container=document.querySelector('.container')


// let myHTML=``;

// for(let i=0;i<=100;i++){
//     myHTML+=`
//     <div class="tanish-container">
//      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png" />

//      <p>${i+1}</p>
//      </div>
//     `
// }

// container.innerHTML=myHTML;






// const myImg = document.querySelector("body > div > div:nth-child(5)");


/////EVENT LISTENEER THREE METHODS
// const h1=document.querySelector('h1')


// function sayHii(){
// console.log('Hiiiii');  

// }


// // function sayKING(){
// //     console.log('KING')
// // }




// //ORRRR.  





// //  const h1=document.querySelector('h1')  

// //  h1.onclick=sayHii


// //ORRRRR



// // function SecondSayHi(){
// //     console.log('Second Hi')
// // }

// // h1.addEventListener('click',sayHii)
// // h1.addEventListener('click',SecondSayHi)



// //ONLY SECONDSAYHI FUNCTION RUN BECAUSE OF H1 is overwrite
// // h1.onclick=sayHii
// // h1.onclick=SecondSayHi



// // h1.onclick=sayHii
// // h1.onclick=SecondSayHi


// // h1.addEventListener('click',sayHii)
// // h1.addEventListener('click',SecondSayHi) 
// // h1.addEventListener('click',sayHii)
// // h1.addEventListener('click',sayKING)


// // card.addEventListener('click',()=>{
// //     console.log('card clicled');
// // })


// // h1.addEventListener('click',function(){
// //     console.log('Second KING');
// // })

// const card=document.querySelector('.card')
// const container=document.querySelector('.container')


// // card.addEventListener('click',sayHii)
// let count=1
// card.addEventListener('click',()=>{
// //     const newCard=document.createElement('div')


// // newCard.classList.add('card')


// //USE CLONE NOT USE MORE NOT GOOd 

// const newCard=card.cloneNode() 
// newCard.classList.remove('add-card')
// newCard.innerText=count++;



// // newCard.innerHTML=count
// // newCard.innerText=count
// // newCard.textContent=count
// // count++
// container.append(newCard)
//     console.log(newCard); 
// })
 


// const nums1=[2,3,4,5,6]
// const nums2=[7,6,7,5,3]

// const joinedArray=[...nums1,...nums2]
// console.log(joinedArray);



// const addCardBtn=document.querySelector('.card')
// const container=document.querySelector('.container')

// let count=1















 //FORM EVENTS 


//  const usernameInput=document.querySelector('#username')  
//  const paragraph=document.querySelector('p')
//  const form=document.querySelector('form')

//  usernameInput.addEventListener('click',()=>{
//     console.log('input clicked');
//  })





//  username.addEventListener('dblclick',()=>{
//     console.log("input double clicked")
//  })






//  username.addEventListener('input', ()=>{
//     console.log('input event fired') ;
//  })








//WHEN WE WANT TO ACCESS THAT VALUE WHICH WE PROVIDE FOR INPUT

// usernameInput.addEventListener('input',(e)=>{
//     // console.log(e);

    

//     console.log(e.target.value);//we get that value by write this 
//     paragraph.innerText=e.target.value;//what we get replace that value in front of us
//     inputValue=e.target.value;//WHAT WE PROVIDE INPUT WE GET THE FINAL VALUE OR RESULT OR VALUE UPDATION
//     console.log('input event fired');
// })




// //CHANGED EVENT  WRITE SOMETHING AND THEN CLICK ANYWHERE WE GET THE VALUE

// usernameInput.addEventListener('change',(e)=>{
//     // console.log(e);

    
//     console.log(e.type) 
//     console.log(e.target.value);//we get that value by write this 
//     paragraph.innerText=e.target.value;//what we get replace that value in front of us
//     inputValue=e.target.value;//WHAT WE PROVIDE INPUT WE GET THE FINAL VALUE OR RESULT OR VALUE UPDATION
//     console.log('input event fired');
// })







// //FOCUS EVENT


// usernameInput.addEventListener('focus',(e)=>{
//     // console.log(e);

    
//     console.log(e.type)
//     console.log(e.target.value);//we get that value by write this 
//     paragraph.innerText=e.target.value;//what we get replace that value in front of us
//     inputValue=e.target.value;//WHAT WE PROVIDE INPUT WE GET THE FINAL VALUE OR RESULT OR VALUE UPDATION
//      console.log('input event fired');
// })




// usernameInput.addEventListener('blur',(e)=>{
//     // console.log(e);

    
//     console.log(e.type)
//     console.log(e.target.value);//we get that value by write this 
//     paragraph.innerText=e.target.value;//what we get replace that value in front of us
//     inputValue=e.target.value;//WHAT WE PROVIDE INPUT WE GET THE FINAL VALUE OR RESULT OR VALUE UPDATION
//      console.log('input event fired');
// })


 
// form.addEventListener('click',(e)=>{
//     console.log(e);
// })







// form.addEventListener('submit',(e)=>{
//     e.preventDefault();//SUBMIT HI ACCEPT NHI KAREGA MATLAB KITNA BHI CLICK ME PAR CLICK KARO VO NHI HOGHA
//     const myFormData=new FormData(form)
//     // console.log(myFormData);

//     // console.log(myFormData.entries());


//      console.log(e);


//     for(const p of myFormData.entries() ){ 
//         console.log(p);
//     }
// })






// form.addEventListener('submit',(e)=>{
//     e.preventDefault();//SUBMIT HI ACCEPT NHI KAREGA MATLAB KITNA BHI CLICK ME PAR CLICK KARO VO NHI HOGHA
//     console.log('form submitted') ;
    
  
// })






// form.addEventListener('click',(e)=>{
//     e.preventDefault();//SUBMIT HI ACCEPT NHI KAREGA MATLAB KITNA BHI CLICK ME PAR CLICK KARO VO NHI HOGHA
//     console.log('form submitted') ;
//     comsole.log(event.currentTarget)
    
  
// })

 














// const h1=document.querySelector('h1') 
// // const card=document.querySelector('.card')

// //OR card or addCardButton both correct

//  const addCardButton=document.querySelector('.card')
// const container=document.querySelector('.container')

// let count=0;

// card.addEventListener('mousedown',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })   


// card.addEventListener('click',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })


// card.addEventListener('mouseup',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })





// card.addEventListener('mouseenter',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })



// card.addEventListener('mouseleave',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })


 


// card.addEventListener('mousemove',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })





// card.addEventListener('mouseover',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })





// card.addEventListener('mouseout',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
// })


 
// addCardButton.addEventListener('wheel',(e)=>{
//     console.log(e);
//     const newCard=document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText=count++
//     container.append(newCard)
//})
 



    // addCardButton.addEventListener('scroll',(e)=>{
    //     console.log(e);
    //     const newCard=document.createElement('div')
    //     newCard.classList.add('card')
    //     newCard.innerText=count++
    //     container.append(newCard)
    // })





    // addCardButton.addEventListener('touchStart',(e)=>{
    //     console.log(e);
    //     const newCard=document.createElement('div')
    //     newCard.classList.add('card')
    //     newCard.innerText=count++
    //     container.append(newCard)
    // })





    // addCardButton.addEventListener('touchMove',(e)=>{
    //     console.log(e);
    //     const newCard=document.createElement('div')
    //     newCard.classList.add('card')
    //     newCard.innerText=count++
    //     container.append(newCard)
    // })




    

    // addCardButton.addEventListener('touchMove',(e)=>{
    //     console.log(e);
    //     const newCard=document.createElement('div')
    //     newCard.classList.add('card')
    //     newCard.innerText=count++
    //     container.append(newCard)
    // })



    //  addCardButton.addEventListener('touchMove',(e)=>{
    //     console.log(e);
    //     const newCard=document.createElement('div')
    //     newCard.classList.add('card')
    //     newCard.innerText=count++
    //     container.append(newCard)
    // })




    //  h1.addEventListener('drag',(e)=>{
    //     console.log(e);
    //     const newCard=document.createElement('div')
    //     newCard.classList.add('card')
    //     newCard.innerText=count++
    //     container.append(newCard)
    // })






    //  addCardButton.addEventListener('pointermove',(e)=>{
    //     console.log(e);
    //     const newCard=document.createElement('div')
    //     newCard.classList.add('card')
    //     newCard.innerText=count++
    //     container.append(newCard)
    // })



     const addCardBtn=document.querySelector('.add-card')
        const container=document.querySelector('.container')
        const cardsList=document.querySelectorAll('.card')
        // const input=document.querySelector('input')
        // const form=document.querySelector('form')
  
        let count=1

        addCardBtn.addEventListener('click',()=>{
            const newCard=document.createElement('div')
            newCard.classList.add('card')
            newCard.innerText=count++
            // newCard.addEventListener('click',()=>{
            //     newCard.remove()
            // })
             container.append(newCard)
        })

        container.addEventListener('click',(e)=>{

            if(e.target!==container){
                e.target.remove()
            
            // console.log(e.target);
         //   e.targ et.remove()
       } })

            
        
        
        
        
        
        
        
        
        // console.log(e);
            // console.log(e.target);

        // cardsList.forEach((card)=>{
        //     console.log(card);
        //     card.addEventListener('click',()=>{
        //         card.remove()
        //     })
        // })
        // input.focus()

//         setTimeout(()=>{
//             input.focus()
//         },4000)

//         setTimeout(()=>{
//             input.blur()

//         },8000)
//        const intervalId=setInterval(()=>{
//         if(count>1000){
//             clearInterval(intervalId)
//         }
// addCardBtn.click()
// },5)




// // setTimeout(()=>{
// //     form.submit()
// //     console.log('FORM SUBMITTED');
// // },2000)


// form.reset()





