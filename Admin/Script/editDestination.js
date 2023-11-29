const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");

//show sidebar


//close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

//display services

let productsContainer = document.getElementById("product-container");
// let productsArray = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", function(e){
    e.preventDefault();

    fetchData();
});
let id = localStorage.getItem("editItem")

async function fetchData(){
    try {
        let res = await fetch(`https://dream-destine.onrender.com/destinations/${id}`)
        let data = await res.json()
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}


// displayProducts(productsArray);

function displayData(data){
    console.log(data) 
    let id = document.getElementById("hotelId")
    let name = document.getElementById("title")
    let image = document.getElementById("hotelImg")
    let price = document.getElementById("price") 
    let detail = document.getElementById("description")

    console.log(id)
    id.value=data.id
    name.value=data.h3
    image.value=data.img
    price.value = data.price;
    detail.value= data.desc
}

let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)
async function postData(){
    event.preventDefault();
    try {
        let res = await fetch(`https://dream-destine.onrender.com/destinations/${id}`,
    {
      method:"PATCH",
      body: JSON.stringify(
        {
          "h3": myform.title.value,
          "img": myform.hotelImg.value,
          "desc": myform.description.value,
          "price": myform.price.value,
        }
      ),
      headers:{
        "Content-type": "application/json"
      }
    })

    let data= await res.json();
    console.log(data)
    alert("Successfully Updated")
    window.location.href="destination_admin.html";
    } catch (error) {
        console.log(error)
    }
}
