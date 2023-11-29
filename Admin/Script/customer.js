let baseUrl = `https://dream-destine.onrender.com/users`

window.addEventListener("load", function(e){
    e.preventDefault();
    fetchData(baseUrl)
});

async function fetchData(url){
    try {
        let res = await fetch(url)
        let data = await res.json()
        ShowData(data)
    } catch (error) {
        console.log(error)
    }
}

function ShowData(data) {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    data.forEach((cust,index1) => {
      let Tr = document.createElement("tr");
      let Td1 = document.createElement("td");
      let Td2 = document.createElement("td");
      let Td3 = document.createElement("td");
      let Td4 = document.createElement("td");
      let Td5 = document.createElement("td");
      
      Td1.innerText = cust.name;
      Td2.innerText = cust.address;
      Td3.innerText = cust.city;
      Td4.innerText = cust.state;
      Td5.innerText = cust.mobile;
      
      Tr.append(Td1, Td2, Td3, Td4, Td5);
      tbody.append(Tr);
    });
  
  }
