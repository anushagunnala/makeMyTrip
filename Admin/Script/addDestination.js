let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)

let url = `https://dream-destine.onrender.com/destinations`

async function postData(){
    event.preventDefault();
    
    try {
        let res = await fetch(url,
    {
      method:"POST",
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
    alert("Successfully Added")
    window.location.href="admin.html";
    } catch (error) {
        console.log(error)
    }
}

