let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)

let url = `https://hid-food-apii.onrender.com/product_data`

async function postData(){
    event.preventDefault();
    
    try {
        let res = await fetch(url,
    {
      method:"POST",
      body: JSON.stringify(
        {
          "name": myform.title.value,
          "avatar": myform.hotelImg.value,
          "details": myform.description.value,
          "distance":myform.distance.value,
          "price": myform.price.value,
          "tax": myform.tax.value,
          "review":"",
          "rating":""
        }
      ),
      headers:{
        "Content-type": "application/json"
      }
    })

    let data= await res.json();
    console.log(data)
    alert("Successfully Added")
    window.location.href="admin.html";
    } catch (error) {
        console.log(error)
    }
}

