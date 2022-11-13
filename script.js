const url = "https://gentle-woodland-70534.herokuapp.com/";
// fetch(url, {
//   mode: 'cors',
//   headers: {
//     'Access-Control-Allow-Origin':'*'
//   }
// })
//   .then(response => {
//           console.log(response);
//           response.json()})
//   .then(data => {console.log(data)});

function addCoinCard(CoinName, CoinPrice){

  let CoinCard = document.createElement("div");
  CoinCard.className = "row rounded bg-dark text-white"
  
  const name = document.createElement("div");
  const namee = document.createTextNode(CoinName);  
  name.className = "col-sm";
  name.appendChild(namee);
  
  const price = document.createElement("div");
  const pricee = document.createTextNode(CoinPrice);  
  price.className = "col-sm";
  price.appendChild(pricee);
  
  CoinCard.appendChild(name);
  CoinCard.appendChild(price);
  
  
  const box = document.getElementsByClassName("container");
  box.appendChild(CoinCard);

}



fetch(url)
  .then(response => response.json())
  .then(response => {
  
    console.log(response)
    let box = document.createElement("div");
    box.className = "container";
    box.className = "rounded bg-dark text-white";

    element.body.appendChild(box);
    
    for (let coin of response.data){
      
      //console.log(coin.name)
      let name = coin.name;
      let price = coin.quote.USD.price;
      
      addCoinCard(name, price);
      
      console.log(name + " : " + price);
    }
    
 })
.catch((err) => console.log(err));
