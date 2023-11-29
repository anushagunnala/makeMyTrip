
let data = JSON.parse(localStorage.getItem("user")) || []
let main1 = document.querySelector("#h2")
let userPassword = document.querySelector("#userPassword")
let userEmail = document.querySelector("#userEmail")
let userlogin = document.querySelector("#login-btn")
let btn = document.querySelector("#create-btn")
let admin = document.querySelector("#admin")
// admin.addEventListener("click",function(){
// 	window.location.href = "admin.html"
// })
btn.addEventListener("click",function(){
    window.location.href="signup.html"
})

userlogin.addEventListener("click",function(e){
	e.preventDefault()
    console.log(data)
    console.log(userEmail.value,userPassword.value)
    if(userEmail.value == "admin@dreamdestine.com" && userPassword.value == "Admin@123"){
        alert("login Sucessfully")
        window.location.href="Admin/admin.html"
    }else{
        let flag = false
        if(userEmail.value == data.email && userPassword.value == data.pass){
            flag = true
        }
        if(flag){
            
            alert("login Sucessfully")
            window.location.href="index.html"
        }else{
            main1.style.display = "block"
            main1.innerText="Invalid Credentials"
        }
    }
})