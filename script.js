
//CREATE MAIN CONTAINER
let box = document.createElement("table");

box.className = " w-full text-sm text-left text-sky-500 shadow-md rounded-md ";

box.innerHTML = "<thead class='text-xs uppercase bg-sky-800 text-sky-300'> <tr> <th scope='col' class='py-5 px-6'>Coin</th> <th scope='col' class='py-5 px-6'>Price</th> </tr> </thead>";

box.setAttribute('id', 'myBox');

let boxBody = document.createElement("tbody");
boxBody.className = "bg-slate-600 border-sky-800 ";


//ADD NEW COIN DATA ROW BY THIS FUNCTION
function addCoinCard(Coin){
    
    //COIN DATA ROW CARD OR BOX WRAPPER
    let CoinCard = document.createElement("tr");
    CoinCard.className = "bg-sky-900 border-sky-800  border-b text-sky-100 hover:shadow-xl"
    
    //CREATE FIRST ELEMENT COIN NAME
    const name = document.createElement("td");
    name.innerHTML += Coin.name;
    name.className = "py-4 px-6";
    
    //CREATE SECOND ELEMENT COIN PRICE
    const price = document.createElement("td");
    price.innerHTML += "$ " + Coin.price;
    price.className = "py-4 px-6";
    
    const rank = document.createElement("td");
    rank.innerHTML += Coin.rank;
    rank.className = "py-4 px-6";
    
    //APPEND ELEMENTS TO THE DATA ROW CARD BOX
    CoinCard.appendChild(name);
    CoinCard.appendChild(price);
    CoinCard.appendChild(rank);

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
    
        let data = []
        
        for (let coin of response.data){

            data.push(
                {
                    name : coin.name,
                    price : Number((coin.quote.USD.price).toFixed(2)),
                    rank : coin.cmc_rank
                }
            );
        }
          
        data.sort((c1, c2) => c1.rank - c2.rank)
        
        for (let coin of data){
            addCoinCard(coin);
        }
    
        //APPEND CONTENT BOX TO MAIN BOX
        box.appendChild(boxBody);
       
    
        let myDiv = document.getElementById("Divv");
        myDiv.appendChild(box);
    })
    .catch((err) => console.log(err));
