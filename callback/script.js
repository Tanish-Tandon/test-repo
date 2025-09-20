


function makeHttpRequest(method,url,callback){
    const xhr=new XMLHttpRequest()
xhr.responseType='json'
xhr.addEventListener('load',()=>{
    
    callback(xhr.response )


    
})

xhr.open(method,url);
xhr.send()





}
makeHttpRequest('GET','https://dummyjson.com/users',(usersData)=>{
    //  console.log(usersData); 

    makeHttpRequest('GET',`https://dummyjson.com/posts/user/${usersData.users[0].id}`,(postsData)=>{
        // console.log(postsData);
        makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postsData.posts[0].id}`,(commentsData)=>{
            // console.log(commentsData.comments[0].user.id );

            makeHttpRequest('GET',`https://dummyjson.com/users/${commentsData.comments[0].user.id}`,(userData)=>{
                console.log(userData);
            })
        })
    })
}) 

// makeHttpRequest('GET','https://dummyjson.com/users/1') 