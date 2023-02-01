//  let email=document.getElementById('lemail')
//  let password=document.getElementById('lpassword')
//  let alertbox=document.getElementById('alertt')
//  function emailValidate(){
//     let emailpattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if(email.value.length==0){
//         errmessage='email canotbe null'
//         alertbox.innerHTML=errmessage
//         alertbox.style.display='block'
//         return false
//     }
//     if(!email.value.match(emailpattern)){
//         errmessage='pls enter a valid email'
//         alertbox.innerHTML=errmessage
//         alertbox.style.display='block'
//         return false
//     }
//     else{
//         alertbox.innerHTML=''
//         alertbox.style.display='none'
//         return true
//     }
// }

// function passwordValidate(){
//     passstrongpattern=/[^a-zA-Z0-9]/
//      if(password.value.length<8){
//         errmessage='password lengthcanot be less than 8'
//         alertbox.innerHTML=errmessage
//         alertbox.style.display='block'
//         return false
//      }
   
//     if(password.value.match(/[A-Z]/i) && password.value.match(/[0-9]/)){
//         passstrength.style.display='block'
//         passstrength.innerHTML='password is strong'
//         return true
//     }
//     if(password.value.match(/[A-Z]/i) || password.value.match(/[0-9]/)){
//         passstrength.style.display='block'
//         passstrength.innerHTML='password is weak'
//         passstrength.style.color='red'
//         return true
//     }
//     else{
//         alertbox.innerHTML=''
//         alertbox.style.display='none'
//         return true
//      }
   
 
// }