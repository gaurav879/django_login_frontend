let lpassword = document.querySelector("#lpassword");
let lemail = document.querySelector("#lemail");
let lsubmitBtn = document.querySelector("#lsubmit");
let detailsbtn = document.querySelector("#details_tab");

lsubmitBtn.addEventListener("click", l_handleSubmit);

async function l_handleSubmit(e) {
    e.preventDefault();

    data = {
        email: lemail.value,
        password: lpassword.value,
    };
    const res = await fetch("https://laptop9.pythonanywhere.com/api/login", {
        method: "POST",
        body: JSON.stringify(data),
    }).then(function(res) {
        x = res.status;
        if (res.status === 200) {
            return res.json();
        } else alert("Enter Correct password please!!!");
    });


    document.cookie = `jwt=${res.jwt}`;

    localStorage.setItem("jwt", res.jwt);
    if (x === 200) {
        detailsbtn.click()
    }
}