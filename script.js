const url = "https://gentle-woodland-70534.herokuapp.com/";

//CREATE MAIN CONTAINER
let box = document.createElement("table");
box.className = " w-full text-sm text-left text-gray-500";

box.innerHTML = "<thead class='text-xs uppercase bg-gray-700 text-gray-400'> <tr> <th scope='col' class='py-3 px-6'>Coin</th> <th scope='col' class='py-3 px-6'>Price</th> </tr> </thead>";

box.setAttribute('id', 'myBox');
box.className = " rounded-lg mx-4 my-4  px-4 py-4 bg-green-200 ";

let boxBody = document.createElement("tbody");
boxBody.className = "bg-slate-600 border-gray-200 ";

function addCoinCard(CoinName, CoinPrice){

    let CoinCard = document.createElement("tr");
    CoinCard.className = "bg-gray-800 border-gray-700  border-b text-gray-100 hover:shadow-xl"

    const name = document.createElement("td");
    name.innerHTML += CoinName;
//     const namee = document.createTextNode(CoinName );  
//     name.className = "col-sm";
//     name.appendChild(namee);

    const price = document.createElement("td");
    price.innerHTML += CoinPrice
//     const pricee = document.createTextNode(":   $ " + CoinPrice);  
//     price.className = "col-sm";
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
        document.body.appendChild(box);
    })
    .catch((err) => console.log(err));
