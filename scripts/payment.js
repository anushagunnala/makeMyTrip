
let total=localStorage.getItem("total")
// console.log(total)

let totalamount=document.getElementById("total-amount")
totalamount.append(total)

let cnfbtn=document.querySelector("#payment-form");
cnfbtn.addEventListener("submit",function(){
    alert(`Your Hotel Booking of ₹ ${total} is Done . Details Send To Your Email Address Thank you.`)
    // window.location.href="./index.html"
    // console.log("hi")

})