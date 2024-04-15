// fill in javascript code here










let form = document.querySelector("form")
form.addEventListener("submit",function(){

    getdata1()
})

let data =JSON.parse(localStorage.getItem("data"))||[]

function getdata1(){
    event.preventDefault()
    let name = document.getElementById("name").value;
    let id = document.getElementById("employeeID").value;
    let department = document.getElementById("department").value;
    let experience = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mbl").value;
    // console.log(name,id,department,experience,email,mobile)
   if(name === "" || id === "" ||department ==="" || experience ==="" || email ==="" ||mobile ===""){
    alert("please fill  all the  info...")
   }

    let obj = {
        name,
        id,
        department,
        experience,
        email,
        mobile
    }
    console.log(obj)

    data.push(obj)
    console.log(data)

    Displaydata(data)
    localStorage.setItem("data",JSON.stringify(data))

}

function Displaydata(arr){
    let tbody = document.querySelector("tbody")
    tbody.innerHTML=""

    arr.forEach((ele,i)=>{
        let tr = document.createElement("tr")

        let name = document.createElement("td")
        name.innerText = ele.name

        let id = document.createElement("td")
        id.innerText = ele.id

        let department = document.createElement("td")
        department.innerText = ele.department

        let experience = document.createElement("td")
        experience.innerText = ele.experience

        let email = document.createElement("td")
        email.innerText = ele.email

        let mobile = document.createElement('td')
        mobile.innerText = ele.mobile

        let role = document.createElement("td")
        if(ele.experience > 5){
            role.innerText ="Senior"
        }
        else if(ele.experience>=2 && ele.experience<=5){
            role.innerText = "Junior"
        }
        else if(ele.experience<=1){
            role.innerText ="Fresher"
        }

        if(ele.experience===""){
            return role.innerText ==""
            // localStorage.removeItem("data")
        }

        let btn = document.createElement("td")
        btn.innerText = "Delete"
        btn.className = "btn1"
        btn.addEventListener("click",function(){
            Delete(i)
        })

        tr.append(name,id,department,experience,email,mobile,role,btn)
        tbody.append(tr)

    })
}

// Delete functionality

function Delete(i){
    data.splice(i,1)
    console.log(data)

    Displaydata(data)
    localStorage.setItem("data",JSON.stringify(data))
    // alert("Data Deleted Successfully!!")

}

// Add filter functionality

let filter = document.getElementById("department")
filter.addEventListener("change",function(){
    filterdata()
})

function filterdata(){
    let filval = filter.value
    console.log(filval)

    let nfilter = data.filter((ele)=>{
        return ele.department === filval
    })
    Displaydata(nfilter)

}



































































































