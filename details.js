let userId = document.querySelector("#t_username");
let _name = document.querySelector("#t_name");
let email = document.querySelector("#t_email");
let address = document.querySelector("#t_address");
let logout = document.querySelector("#logout");
let _delete =document.querySelector("#delete");


async function l_handleSubmit() {
    let x = window.localStorage.getItem('jwt')
    console.log(window.localStorage.getItem('jwt'))
    console.log(x)
    data = {
        jwt : window.localStorage.getItem('jwt')
    }
    const res = await fetch("http://localhost:8000/api/user",{
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

async function handleSubmit() {
    document.cookie = 'jwt='
    localStorage.setItem("jwt","")
    const res = await fetch("http://localhost:8000/api/logout",{
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
    const res = await fetch("http://localhost:8000/api/user",{
      method : "DELETE",
      body : JSON.stringify(data)
    })
    .then(function(res)
    {
        window.location.replace("http://localhost:5500/index.html")
    })
}

l_handleSubmit()
logout.addEventListener("click", handleSubmit);
_delete.addEventListener("click", d_handleSubmit);







