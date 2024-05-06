import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar()



let signup = JSON.parse(localStorage.getItem("signupdata")) || [];

let form = document.querySelector("form")
form.addEventListener("submit", function () {
    getdata1()
})



function getdata1() {
    event.preventDefault()
    let name = document.getElementById('name').value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confipassword = document.getElementById('confi-password').value

    if (name == "" || email == "" || password == "" || confipassword == "") {
        return alert("Please Fill All The Information.....")
    }

    // console.log(name,email,password,confipassword)

    if (confipassword === password) {
        let obj = {
            name,
            email,
            password,
            confipassword
        }
        // console.log(obj)

        signup.push(obj)
        console.log(signup)

        localStorage.setItem("signupdata", JSON.stringify(signup));



        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)

        });
        window.location.href = "./Login.html"
        alert("Singup Successfull!!")

    }
    else {
        alert("Please Correct The Password!!")
    }
}
