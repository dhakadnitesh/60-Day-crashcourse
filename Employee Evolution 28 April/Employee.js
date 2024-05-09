let div = document.querySelector("tbody")


let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`


 async function getdata1(url){
    try {
        let res = await fetch(url)
        let data = await res.json()
        let data2 = data.data
        console.log(data2)
        displaydata(data2)
        
    } catch (error) {
        console.log(error)
        
    }

}

getdata1(url)


const displaydata =(arr)=>{
    div.innerHTML =""

    arr.forEach((ele)=>{
        let tr =document.createElement("tr")

        let sno = document.createElement("td")
        sno.innerText = ele.id
     

        let name = document.createElement("td")
        name.innerText = ele.name

        let gender = document.createElement("td")
        gender.innerText = ele.gender

        let department = document.createElement("td")
        department.innerText = ele.department

        let salary = document.createElement("td")
        salary.innerText  =ele.salary

        tr.append(sno,name,gender,department,salary)
        div.append(tr)
    })
}



// sort by salry 

let sort = document.getElementById("sort")
sort.addEventListener("change",function(){
    sortbysalary()
})


function sortbysalary(){
    let sortval = sort.value
    console.log(sortval)

    getdata1(`${url}?sort=salary&order=${sortval}`)

    if(sortval =="Return-sort"){
        window.location.href="./Employee.html"
    }


}




// sort by salary





// filter by department

let filter1 = document.getElementById("filter1")
filter1.addEventListener("change",function(){
    filterdata1()
})
function filterdata1(){
    let filterval1 = filter1.value;
    console.log(filterval1)
    
    getdata1(`${url}?filterBy=department&filterValue=${filterval1}`)

    if(filterval1 == 'Return-filter1'){
        window.location.href ="./Employee.html"
    }
}




// filter by department



// filter By gender

let filter2 = document.getElementById('filter2')
filter2.addEventListener("change",function(){
    filterdata2()
})

function filterdata2(){
    let filterval2 = filter2.value;
    console.log(filterval2)

    getdata1(`${url}?filterBy=gender&filterValue=${filterval2}`)

    if(filterval2 == "Return-filter2"){
        window.location.href="./Employee.html"
    }


}
// filter By gender

