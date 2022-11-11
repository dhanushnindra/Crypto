const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=7&convert=USD&CMC_PRO_API_KEY=59061bf5-18f0-4604-8f07-0fef5bbed287"

fetch(url, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
  .then(response => {
          console.log(response);
          response.json()})
  .then(data => {console.log(data)});
fetch(url,{mode:'cors',
          Origin: 'https://dhanushnindra.github.io/Crypto'})
  .then(res => {
          console.log(res);
          res.json()})
  .then(obj => {
    for (let coin of obj.data){
      
      //console.log(coin.name)
      let name = coin.name
      let price = coin.quote.USD.price
      
      console.log(name + " : " + price);
    }
    
  })
.catch((err) => console.log(err));
