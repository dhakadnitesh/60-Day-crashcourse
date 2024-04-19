import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar()




let url = `http://localhost:3000/products`


let div = document.getElementById("container")


const getdata1 = async()=>{
    try {
        let res = await fetch(url)
        let data = await res.json()
        displaydata(data)
        console.log(data)

        
    } catch (error) {
        console.log(error)
        
    }
}

getdata1()



function displaydata(arr){
    div.innerHTML =""

    arr.forEach((ele)=>{
        let card = document.createElement("div")

        let img = document.createElement("img")

        let title = document.createElement("h3")

        let price= document.createElement("p")

        let rating = document.createElement("p")

        let btn = document.createElement("button")
        btn.innerText = "Add To Card"
        btn.className = "btn"
        btn.addEventListener("click",function(){
           Addtocard(ele)
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


function Carddata(arr){
    document.querySelector("span").innerHTML = arr.length
}

let products = JSON.parse(localStorage.getItem("product"))||[]
Carddata(products)


function Addtocard(ele){
    products.push(ele)
    console.log(products)

    // displaydata(products)
    localStorage.setItem("product",JSON.stringify(products))
    alert("Products Added To The Card")
    Carddata(products)


}