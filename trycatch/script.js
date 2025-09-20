
// let a
// console.log(a);


// try{
//     console.log(a);
// } catch (err){
//     console.dir(err.message )
// }

// console.log(3+7);



// const user={
//     name:'TANISH',

//     age:18,
// }
// // console.log(user.address.city)



// try{
//     console.log(user.address.city);
// } catch (err){
//     console.dir(err)
// }

// console.log(3+7);
// console.log('HELLO')






// const user={
//     name:'TANISH',

//     age:18,
// }
// // console.log(user.address.city)



// try{
//     console.log(user.address.city);
// } catch (err){
//     console.dir(err.name)
// }

// console.log(3+7);
// console.log('HELLO')





// const user={
//     name:'TANISH',

//     age:18,
// }
// // console.log(user.address.city)



// try{
//     console.log(user.address.city);
// } catch (err){
//     console.dir(err.message)
// }

// console.log(3+7);
// console.log('HELLO')





// const user={
//     name:'TANISH',

//     age:18,
// }
// // console.log(user.address.city)



// try{
//     console.log(user.address);
// } catch (err){
//     console.dir(err)
// } finally{
//     console.log('TANISH TANDON')
// }

// console.log(3+7);








async function makeAsyncRequest() {
   try{
    const url='https://dummyjson.com/products/?sleep=6000'

   const response=await fetch(url)
   const data=await response.json()
   console.log(data)
  return data
   } catch(err){
    console.log(err)
   }
   
}


makeAsyncRequest()
