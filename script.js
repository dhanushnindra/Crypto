
//CREATE MAIN CONTAINER
let box = document.createElement("table");

box.className = " w-full text-sm text-left text-sky-500 shadow-md rounded-md ";

box.innerHTML = "<thead class='text-xs uppercase bg-sky-800 text-sky-300'> <tr> <th scope='col' class='py-5 px-6'>Coin</th> <th scope='col' class='py-5 px-6'>Price</th> </tr> </thead>";

box.setAttribute('id', 'myBox');

let boxBody = document.createElement("tbody");
boxBody.className = "bg-slate-600 border-sky-800 ";


//ADD NEW COIN DATA ROW BY THIS FUNCTION
function addCoinCard(CoinName, CoinPrice){
    
    //COIN DATA ROW CARD OR BOX WRAPPER
    let CoinCard = document.createElement("tr");
    CoinCard.className = "bg-sky-900 border-sky-800  border-b text-sky-100 hover:shadow-xl"
    
    //CREATE FIRST ELEMENT COIN NAME
    const name = document.createElement("td");
    name.innerHTML += CoinName;
    name.className = "py-4 px-6";
    
    //CREATE SECOND ELEMENT COIN PRICE
    const price = document.createElement("td");
    price.innerHTML += "$ " + CoinPrice;
    price.className = "py-4 px-6";
    
    //APPEND ELEMENTS TO THE DATA ROW CARD BOX
    CoinCard.appendChild(name);
    CoinCard.appendChild(price);

    console.log("DONE ADDING ", CoinName);
    
    //APPEND DATA CARD BOX TO THE CONTENT CONTAINER
    boxBody.appendChild(CoinCard);

}

//FETCH DATA FROM THIS URL
const url = "https://stanchei-render-server-api.onrender.com/";

fetch(url)
    .then(response => response.json())
    .then(response => {
        //JSON CONVERTED TO JS OBJECT
        console.log(response)
        
        for (let coin of response.data){

            let name = coin.name;
            let price = coin.quote.USD.price;
            price = Number((price).toFixed(2));

            addCoinCard(name, price);

            console.log(name + " : " + price);
                
        }
    
        //APPEND CONTENT BOX TO MAIN BOX
        box.appendChild(boxBody);
       
    
        let myDiv = document.getElementById("Divv");
        myDiv.appendChild(box);
    })
    .catch((err) => console.log(err));
