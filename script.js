const url = "https://gentle-woodland-70534.herokuapp.com/";

//CREATE MAIN CONTAINER
let box = document.createElement("table");
  box.innerHTML = "<thead> <tr> <th>Coin</th> <th>Price</th> </tr> </thead>";

box.setAttribute('id', 'myBox');
box.className = "table-fixed drop-shadow-lg rounded-lg mx-4 my-4  px-4 py-4 bg-green-200 ";

let boxBody = document.createElement("tbody");

function addCoinCard(CoinName, CoinPrice){

    let CoinCard = document.createElement("tr");
    CoinCard.className = "px-4 py-2 hover:shadow-xl"

    const name = document.createElement("td");
    const namee = document.createTextNode(CoinName );  
//     name.className = "col-sm";
    name.appendChild(namee);

    const price = document.createElement("td");
    const pricee = document.createTextNode(":   $ " + CoinPrice);  
//     price.className = "col-sm";
    price.appendChild(pricee);

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
        document.body.appendChild(box);
    })
    .catch((err) => console.log(err));
