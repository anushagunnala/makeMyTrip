let hotelLS = JSON.parse(localStorage.getItem("hotelCard"))||[]
console.log(hotelLS)
let bookingcontainer=document.getElementById("booking-container")
let box1=document.getElementById("box1")
let box2=document.getElementById("box2")
let box3=document.getElementById("box3")



function displayhotel(data){
    bookingcontainer.innerHTML=null
   box1.innerHTML=null;
   box2.innerHTML=null;
   box3.innerHTML=null;

    data.forEach((element,index)=>{

     let image=document.createElement("img");
      image.src=element.avatar;

      let title=document.createElement("h3");
      title.textContent=element.name;
      
      let rating=document.createElement("p");
      rating.textContent=`Rating: ${element.rating}`;

      let price=document.createElement("h4");
      price.textContent=`₹${element.price}`;

      let details=document.createElement("p");
      details.textContent=element.details;

      let day=document.createElement("p");
      day.textContent=`Stay for ${element.day} day`;

      let guest=document.createElement("p");
      guest.textContent=`Guest:${element.Guest}`;


       
      let Increaseforday=document.createElement("button");
        Increaseforday.textContent="+"
        Increaseforday.style.backgroundColor="rgb(52, 157, 255)"
        Increaseforday.style.color="white"
        Increaseforday.style.padding="8px"
        Increaseforday.style.borderRadius="5px"

        Increaseforday.addEventListener("click",()=>{
        element=element.day++;

        localStorage.setItem("hotelCard",JSON.stringify(hotelLS));
        displayhotel(hotelLS)
      });

        
        let Decreaseforday=document.createElement("button");
        Decreaseforday.textContent="-"
        Decreaseforday.style.backgroundColor="rgb(52, 157, 255)"
        Decreaseforday.style.color="white"
        Decreaseforday.style.padding="8px"
        Decreaseforday.style.marginLeft="3px"
        Decreaseforday.style.borderRadius="5px"



       
      Decreaseforday.addEventListener("click",()=>{
        if(element.day>1){
          element=element.day--;
        }
        localStorage.setItem("hotelCard",JSON.stringify(hotelLS));
        displayhotel(hotelLS)
      })




        let Increaseforguest=document.createElement("button");
        Increaseforguest.textContent="+"
        Increaseforguest.style.backgroundColor="rgb(52, 157, 255)"
        Increaseforguest.style.color="white"
        Increaseforguest.style.padding="8px"
        Increaseforguest.style.borderRadius="5px"


        Increaseforguest.addEventListener("click",()=>{
        element=element.Guest++;

        localStorage.setItem("hotelCard",JSON.stringify(hotelLS));
        displayhotel(hotelLS)
      });

        let Decreaseforguest=document.createElement("button");
        Decreaseforguest.textContent="-"
        Decreaseforguest.style.backgroundColor="rgb(52, 157, 255)"
        Decreaseforguest.style.color="white"
        Decreaseforguest.style.padding="8px"
        Decreaseforguest.style.marginLeft="3px"
        Decreaseforguest.style.borderRadius="5px"




        Decreaseforguest.addEventListener("click",()=>{
        if(element.Guest>0){
          element=element.Guest--;
        }
        localStorage.setItem("hotelCard",JSON.stringify(hotelLS));
        displayhotel(hotelLS)
      })
       



      let totalsum=0;
      let sum1=0
      let sum2=0

      let guestcharge=500;
      sum1=element.price*element.day
    
      sum2=guestcharge*element.Guest
      totalsum=sum1+sum2
      
      let totalprice=document.createElement("h3");
      totalprice.textContent="You Pay:-"+" ₹"+ totalsum

      let paragraph=document.createElement("p");
      paragraph.textContent="(Including guest and other charges.)"


      let paragraphguest=document.createElement("p");
      paragraphguest.textContent="(Per guest ₹500 has been charged.)"

        
      let paybtn=document.createElement("button");
      paybtn.textContent="PROCEED TO BOOKING"
      paybtn.style.backgroundColor="rgb(52, 157, 255)"
      paybtn.style.color="white";
      paybtn.style.border="none"
      paybtn.style.width="250px";
      paybtn.style.padding="20px"
      paybtn.style.borderRadius="5px"
      paybtn.style.marginLeft="10px"


      paybtn.addEventListener("click",()=>{
        
        localStorage.setItem("total",totalsum)

         window.location.href="./userDetails.html"
        
      })

      box3.append(day,Increaseforday,Decreaseforday,guest,paragraphguest,Increaseforguest,Decreaseforguest,totalprice,paragraph,paybtn)
      box2.append(title,details,rating,price)
      box1.append(image)
      bookingcontainer.append(box1,box2,box3)


    })

}
displayhotel(hotelLS)