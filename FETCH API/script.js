
//GET REQUEST BY DEFAULT
// fetch('https://dummyjson.com/products')
// .then((res)=>res.json())
// .then((data)=>console.log(data))







// fetch('hello',{
//     method:'POST'
// })
// .then((res)=> res.json())
// .then((data)=>console.log(data))



//POST REQUEST
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category: 'Stationary'
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log)
// .catch((err)=>{
//     console.log(err);
// }) 


// makeHttpRequest('GET','https://dummyjson.com/users')
//    .then((usersData)=> makeHttpRequest('GET',`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
//    .then((postsData)=>makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
//    .then((commentsData)=>console.log(commentsData))
//    .then((userData)=>console.log(userData))
//    .catch((err)=>console.log(err))







  //  fetch('https://dummyjson.com/users', { method: 'GET' })
  // .then(res => res.json())
  // .then(usersData => {
  //   return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`, { method: 'GET' })
  // })
  // .then(res => res.json())
  // .then(postsData => {
  //   return fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`, { method: 'GET' })
  // })
  // .then(res => res.json())
  // .then(commentsData => {
  //   console.log("Comments:", commentsData)
  // })
  // .catch(err => console.error("Error:", err))
  