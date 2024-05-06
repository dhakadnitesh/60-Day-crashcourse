import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar()

let logindata = JSON.parse(localStorage.getItem("signupdata")) || [];


console.log(logindata)


let form = document.querySelector("form")
form.addEventListener("submit",function(){
    getdata1()
})

function getdata1(){
    event.preventDefault()
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let newarr = logindata.find((ele)=>{
        return ele.email===email && ele.password===password
    })

    if(newarr){
        localStorage.setItem("isauth","Authenticated")

        alert("Login Successful")
        window.location.href="./Products.html"
    }
    else{
        alert("Wrong Creadiential,Please Check The Info.....")
    }


    

}
