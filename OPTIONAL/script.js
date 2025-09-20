const user={
    firstName:'TANISH',
    lastName:'TANDON',
    age:25,
    address:{
        city:'DELHI'
    },
    getFullName:function(){
        return user.firstName +' ' +user.lastName
    },



}


const a='city'
// console.log(user.address?.[a])

// console.log(user?.address?.city)

// console.log(user.address.city)
// console.log(user.address?.city)

// console.log(user.address && user.address.city)


// console.log(user.firstName);
// console.log(lastName); 

// console.log(user.getFullName?.());