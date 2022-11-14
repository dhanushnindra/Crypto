const url = "https://gentle-woodland-70534.herokuapp.com/";

//CREATE MAIN CONTAINER
let box = document.createElement("div");

box.setAttribute('id', 'myBox');
box.className = "container drop-shadow-lg rounded-lg mx-4 my-6  px-5 py-5 bg-green-200 space-y-6";

function addCoinCard(CoinName, CoinPrice){

    let CoinCard = document.createElement("div");
    CoinCard.className = "px-4 py-2 hover:shadow-xl"

    const name = document.createElement("div");
    const namee = document.createTextNode(CoinName + ":   $ " + CoinPrice);  
    //name.className = "col-sm";
    name.appendChild(namee);

    // const price = document.createElement("div");
    // const pricee = document.createTextNode(CoinPrice);  
    //price.className = "col-sm";
    //price.appendChild(pricee);

    CoinCard.appendChild(name);
    //CoinCard.appendChild(price);

    console.log("DONE");
    
    //const box = document.getElementById("myBox");
    box.appendChild(CoinCard);

}



fetch(url)
    .then(response => response.json())
    .then(response => {
    
        console.log(response)
        
        for (let coin of response.data){
        
        //console.log(coin.name)
        let name = coin.name;
        let price = coin.quote.USD.price;
        
        addCoinCard(name, price);
        
        console.log(name + " : " + price);
        }
        document.body.appendChild(box);
    })
    .catch((err) => console.log(err));
