let userId = document.querySelector("#t_username");
let _name = document.querySelector("#t_name");
let email = document.querySelector("#t_email");
let address = document.querySelector("#t_address");

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
l_handleSubmit()





