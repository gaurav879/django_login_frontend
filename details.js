let userId = document.querySelector("#t_username");
let _name = document.querySelector("#t_name");
let email = document.querySelector("#t_email");
let address = document.querySelector("#t_address");
let logout = document.querySelector("#logout");
let _delete =document.querySelector("#delete");
let _update =document.querySelector("#edit")
let u_name = document.querySelector("#u_name")
let u_username = document.querySelector("#u_username")
let u_email = document.querySelector("#u_email")
let u_address = document.querySelector("#u_address")
let _save = document.querySelector("#save")
let container = document.querySelector("#container")


async function l_handleSubmit() {
    // let x = window.localStorage.getItem('jwt')
    // console.log(window.localStorage.getItem('jwt'))
    // console.log(x)
    data = {
        jwt : window.localStorage.getItem('jwt')
    }
    const res = await fetch("https://laptop9.pythonanywhere.com/api/user",{
      method : "POST",
      body: JSON.stringify(data)
    })
    .then(function(res)
    {
        if(res.status===200)
            return(res.json())
        else
            alert("Enter Correct password please!!!")
    }
    )
    userId.innerHTML=res.username
    _name.innerHTML=res.name 
    email.innerHTML=res.email
    address.innerHTML=res.address
    console.log(res);
  } 

async function u_handleSubmit(){
    
    data = {
        jwt : window.localStorage.getItem('jwt')
    }
    const res = await fetch("https://laptop9.pythonanywhere.com/api/user",{
      method : "POST",
      body: JSON.stringify(data)
    })
    .then(function(res){
        // res=res.json()
        // console.log(res)
        console.log("AAAAA")
        

        return(res.json())

    })   
    
    console.log(res)
    u_username.value=res.username
    u_name.value=res.name 
    u_email.value=res.email
    u_address.value=res.address
}

async function s_handleSubmit() {
    data = {
        jwt : window.localStorage.getItem('jwt'),
        username : u_username.value,
        name : u_name.value,
        email : u_email.value,
        address : u_address.value
    }
    const resp = await fetch("https://laptop9.pythonanywhere.com/api/user",{
        method : "PUT",
        body: JSON.stringify(data)
    }) 
    container.style.display="none";
}

async function handleSubmit() {
    document.cookie = 'jwt='
    localStorage.setItem("jwt","")
    const res = await fetch("https://laptop9.pythonanywhere.com/api/logout",{
      method : "GET"
    })
    .then(function(res)
    {
        window.location.replace("http://localhost:5500/index.html")
    })
}
async function d_handleSubmit() {
    // let x = window.localStorage.getItem('jwt')
    // console.log(window.localStorage.getItem('jwt'))
    // console.log(x)

    data = {
        jwt : window.localStorage.getItem('jwt')
    }
    const res = await fetch("https://laptop9.pythonanywhere.com/api/user",{
      method : "DELETE",
      body : JSON.stringify(data)
    })
    .then(function(res)
    {
        window.location.replace("http://localhost:5500/index.html")
    })
    
}
function e_Submit(){
    container.style.display="inline-block";
}


l_handleSubmit()
logout.addEventListener("click", handleSubmit);
_delete.addEventListener("click", d_handleSubmit);
_update.addEventListener("click", u_handleSubmit);
_save.addEventListener("click", s_handleSubmit);
_update.addEventListener("click", e_Submit);









