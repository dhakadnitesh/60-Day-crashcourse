

let btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    getdata1()
})

let div = document.getElementById("container")

let url = `https://reqres.in/api/users`

 async function getdata1(){
    try {

        let res = await fetch(url)
        let data = await res.json()
        let data2 = data.data
        displaydata(data2)
        console.log(data2)
        
    } catch (error) {
        console.log(error)
        
    }
    
}

const displaydata = (arr)=>{
    div.innerHTML =""

    arr.forEach((ele)=>{
        let card = document.createElement("div")

        let name = document.createElement("h3")

        let email = document.createElement("p")

        let avatar = document.createElement("img")


        card.className = "card"

        name.innerText = ele.first_name
        name.className = "name"

        email.innerText = ele.email
        email.className = "email"

        avatar.src = ele.avatar
        avatar.className = "avatar"

        card.append(avatar,name,email)
        div.append(card)
    })
}