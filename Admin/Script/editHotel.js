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
        let res = await fetch(`https://hid-food-apii.onrender.com/product_data/${id}`)
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
    let tax = document.getElementById("tax")
    let distance = document.getElementById("distance")
    let detail = document.getElementById("description")

    console.log(id)
    id.value=data.id
    name.value=data.name
    image.value=data.avatar
    price.value = data.price;
    tax.value = data.tax
    distance.value = data.distance
    detail.value= data.details
}

let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)
async function postData(){
    event.preventDefault();
    try {
        let res = await fetch(`https://hid-food-apii.onrender.com/product_data/${id}`,
    {
      method:"PATCH",
      body: JSON.stringify(
        {
          "name": myform.title.value,
          "avatar": myform.hotelImg.value,
          "details": myform.description.value,
          "distance":myform.distance.value,
          "price": myform.price.value,
          "tax": myform.tax.value
        }
      ),
      headers:{
        "Content-type": "application/json"
      }
    })

    let data= await res.json();
    console.log(data)
    alert("Successfully Updated")
    window.location.href="hotel_admin.html";
    } catch (error) {
        console.log(error)
    }
}
