

let div = document.getElementById('container')

let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`


 async function getdata1(url){
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
    div.innerHTML = ""

    arr.forEach((ele)=>{
        let card = document.createElement("div")

        let country = document.createElement("h3")

        let id = document.createElement("p")

        let rank = document.createElement("p")

        let population = document.createElement("h4")

        card.className = "card"

        country.innerText = `Country:- ${ele.country}`
        country.className = "h3"

        id.innerText = `Id :- ${ele.id}`
        id.className = "p"

        rank.innerText = `Rank :- ${ele.Rank}`
        rank.className = "p"


        population.innerText = `Population:- ${ele.population}`
        population.className = "h4"


        card.append(country,id,rank,population)
        div.append(card)



    })



}

getdata1(url)



// for sorting

let sort  = document.getElementById("sort")
sort.addEventListener("change",function(){
    sortdata()
})

function sortdata(){
    let sort2 = sort.value;
    console.log(sort2)

    let sorturl = `${url}?sort=population&order=${sort2}`;

    // if(sort2==="Return-Page"){
    //     window.location.href="./index.html"
    // }
    
    getdata1(sorturl)
}