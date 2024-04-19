import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar()



let card = JSON.parse(localStorage.getItem("product"))||[]
Carddata(card)


let div = document.getElementById("container")



function displaydata(arr){
    div.innerHTML =""

    arr.forEach((ele,i)=>{
        let card = document.createElement("div")

        let img = document.createElement("img")

        let title = document.createElement("h3")

        let price= document.createElement("p")

        let rating = document.createElement("p")

        let btn = document.createElement("button")
        btn.innerText = "Remove From Card"
        btn.className = "btn"
        btn.addEventListener("click",function(){
           Removefromcard(ele,i)
        })


        card.className = "card"

        img.src = ele.src
        img.className = "img"

        title.innerText = `Title:-- ${ele.title}`
        title.className ="h3"

        price.innerText = `price:-- ${ele.price} rupees`
        price.className ="p"

        rating.innerText = `Rating:-- ${ele.ratings}`
        rating.className ="p"



        card.append(img,title,price,rating,btn)
        div.append(card)
    })
}

displaydata(card)

function Carddata(arr){
    document.querySelector("span").innerHTML = arr.length
}




function Removefromcard(ele,i){
   card.splice(i,1)
   console.log(card)
   
    
   localStorage.setItem("product",JSON.stringify(card))
   Carddata(card)
   displaydata(card)
   alert("Products Remove From The Card!!")
   if(card.length===0){
    window.location.href="./Products.html"
   }
}