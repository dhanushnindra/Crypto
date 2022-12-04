const url = "https://stanchei-render-server-api.onrender.com/";

//CREATE MAIN CONTAINER
let box = document.createElement("table");
box.className = " w-full text-sm text-left text-sky-500 shadow-md rounded-md ";

box.innerHTML = "<thead class='text-xs uppercase bg-sky-800 text-sky-300'> <tr> <th scope='col' class='py-5 px-6'>Coin</th> <th scope='col' class='py-5 px-6'>Price</th> </tr> </thead>";

box.setAttribute('id', 'myBox');
//box.className = " rounded-lg  px-4 py-4 bg-green-200 ";

let boxBody = document.createElement("tbody");
boxBody.className = "bg-slate-600 border-sky-800 ";

function addCoinCard(CoinName, CoinPrice){

    let CoinCard = document.createElement("tr");
    CoinCard.className = "bg-sky-900 border-sky-800  border-b text-sky-100 hover:shadow-xl"

    const name = document.createElement("td");
    name.innerHTML += CoinName;
//     const namee = document.createTextNode(CoinName );  
    name.className = "py-4 px-6";
//     name.appendChild(namee);

    const price = document.createElement("td");
    price.innerHTML += "$ " + CoinPrice;
//     const pricee = document.createTextNode(":   $ " + CoinPrice);  
price.className = "py-4 px-6";
//     price.appendChild(pricee);

    CoinCard.appendChild(name);
    CoinCard.appendChild(price);


    console.log("DONE");
    
    //const box = document.getElementById("myBox");
    boxBody.appendChild(CoinCard);

}



fetch(url)
    .then(response => response.json())
    .then(response => {
    
        console.log(response)
        
        for (let coin of response.data){
        
        //console.log(coin.name)
        let name = coin.name;
        let price = coin.quote.USD.price;
        price = Number((price).toFixed(2));
        
        addCoinCard(name, price);
        
        console.log(name + " : " + price);
                
        }
        box.appendChild(boxBody);
       
        let myDiv = document.getElementById("Divv");
        myDiv.appendChild(box);
    })
    .catch((err) => console.log(err));
