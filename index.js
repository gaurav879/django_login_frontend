let userId = document.querySelector("#userId");
let _name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let address = document.querySelector("#address");
let submitBtn = document.querySelector("#submit");



submitBtn.addEventListener("click", handleSubmit);


async function handleSubmit(e) {
    
  e.preventDefault();

  data = {
    username : userId.value,
    name : _name.value,
    email : email.value,
    password : password.value,
    address : address.value
  }

  console.log(data)  
  console.log(JSON.stringify(data))
  const res = await fetch("http://localhost:8000/api/register",{
    method : "POST",
    body : JSON.stringify(data)
  })
  .then(function(res){return(res.json())})
  console.log(res);
}

