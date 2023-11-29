const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', postData)
let url = `https://dream-destine.onrender.com/users`

let  name = document.getElementById("first-name")
let  address = document.getElementById("Address")
let  city = document.getElementById("city")
let  state = document.getElementById("state")
let  mobile = document.getElementById("mobile")
let  email = document.getElementById("email")
let  password = document.getElementById("password")

async function postData(){
    event.preventDefault();
    try {
        let res = await fetch(url,
    {
      method:"POST",
      body: JSON.stringify(
        {
          "name": name.value,
          "address": address.value,
          "city":city.value,
          "state": state.value,
          "mobile": mobile.value,
        }
      ),
      headers:{
        "Content-type": "application/json"
      }
    })

    let data= await res.json();
    console.log(data)
    let obj ={
      "email": email.value,
      "pass": password.value,
      "name": name.value,
  }
  localStorage.setItem("user", JSON.stringify(obj))
    alert("Signup Sucessfully")
     window.location.href="login.html";
    } catch (error) {
        console.log(error)
    }
}