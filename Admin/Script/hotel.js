const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");

//show sidebar


//close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

//display services

let productsContainer = document.getElementById("product-container");
let baseUrl = `https://hid-food-apii.onrender.com/product_data`;
let pagination = document.getElementById("pagination");
let mainSection = document.getElementById("container");
let lthBtn = document.getElementById("lth");
let htlBtn = document.getElementById("htl");
let filterBtn = document.getElementById('filter')
// let productsArray = JSON.parse(localStorage.getItem("products")) || [];
// let productsArray = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", function(e){
    e.preventDefault();

    fetchHotels(`${baseUrl}?_page=1&_limit=9`);
});
let pageData = []
async function fetchHotels(url){
    try {
       let res = await fetch(url)
       let total = res.headers.get(`X-Total-Count`)
        pagination.innerHTML = "";
        let page = Math.ceil(total/9);

        for (let i = 1; i <= page; i++) {
            pagination.append(creatBtn(i))
        }

       let data = await res.json()
       pageData = data
       displayHotels(pageData)
       console.log(data) 
    } catch (error) {
        console.log(error)
    }
}

function creatBtn(id) {

    let btn = document.createElement("button");
    btn.classList.add("pageBtn");
    btn.textContent = id;
    btn.addEventListener("click", () => fetchHotels(`${baseUrl}?_page=${id}&_limit=9`))
    return btn;
}
// displayProducts(productsArray);

function displayHotels(data){
    productsContainer.innerHTML = "";

    data.forEach((item, index) => {
        productsContainer.append(createCard(item));
    });
}

function createCard(product){
    let productCard = document.createElement("div");
    productCard.setAttribute("class", "product-card");

    let productImg = document.createElement("img");
    productImg.setAttribute("class", "product-img");
    productImg.src = product.avatar;

    let productDesc = document.createElement("p");
    productDesc.setAttribute("class", "product-desc");
    productDesc.innerText = product.details;

    let productName = document.createElement("h2");
    productName.setAttribute("class", "product-category");
    productName.innerText = product.name;
    
    let productPrice = document.createElement("h4");
    productPrice.setAttribute("class", "product-desc");
    productPrice.innerText = `₹ ${product.price}`;

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("class", "remove-btn");

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.setAttribute("class", "edit-btn");

    removeButton.addEventListener("click", function(){
        deleteHotel(product.id);
    })

    editButton.addEventListener("click", function(){
        localStorage.setItem("editItem", product.id)
        window.location.href="editHotel.html";
    })
    productCard.append(productImg, productName, productDesc,productPrice, removeButton, editButton);

    return productCard
}

lthBtn.addEventListener("click", function () {
    let sH = [...pageData]
    sH = sH.sort(function (a, b) {
        return a.price - b.price
    })

    displayHotels(sH)
})

htlBtn.addEventListener("click", function () {
    let sH = [...pageData]
    sH = sH.sort(function (a, b) {
        return b.price - a.price
    })

    displayHotels(sH)
})

filterBtn.addEventListener("change", () => {
    if (filterBtn.value == "") {
        displayHotel(pageData);
    }
    else {
        fetchHotels(`${baseUrl}?review=${filterBtn.value}`)
    }

})

async function deleteHotel(hotelId){
    try {
      let res = await fetch(`${baseUrl}/${hotelId}`,{
        method:"DELETE",
        headers:{
          "Content-type":"application/json"
        }
      })
      fetchHotels(`${baseUrl}?_page=1&_limit=9`);
    } catch (error) {
      console.log(error)
    }
  }