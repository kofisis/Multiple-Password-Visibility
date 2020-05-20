let toggle = document.querySelector("#show-passwords");//toggle to show password

let password = document.querySelectorAll(".password"); // selecting all password classes

//adding eventListener for each selector

// Toggle to show Password
function showPassword(pass){
 if(event.target.checked){
     pass.type="text";
   }
   else{
     pass.type="password";
   };
}

//Looping over selectors
function looped(){
  password.forEach(showPassword);
}

//Calling the click event handler

toggle.addEventListener("click",looped,false);
  
  
  


/*
Bad accessbility because addEventListener is called inside the forEach Loop

password.forEach(function(x){
  toggle.addEventListener("click",function(y){
    if(y.target.checked){
      x.type="text"
    }
    else{
      x.type="password";
    }
    
  },false)
})

*/
