import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  getdata1(event);
});

function getdata1(event) {
  event.preventDefault();

  let src = document.getElementById("int1").value;
  let title = document.getElementById("int2").value;
  let price = document.getElementById("int3").value;
  let ratings = document.getElementById("int4").value;

  if (src == "" || title == "" || price == "" || ratings == "") {
    return alert("Please Fill All The Information.....")
  }

  let obj = {
    // productId: Math.random().toString(),
    src,
    title,
    price,
    ratings,
  };
  console.log(obj);

  fetch(`http://localhost:3000/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
    
  });
  window.location.href="./Products.html"
  alert("Successfully Created!!!")
}
