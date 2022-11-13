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
fetch(url)
  .then(response => response.json())
  .then(response => {
  
    console.log(response)
    
    for (let coin of response.data){
      
      //console.log(coin.name)
      let name = coin.name
      let price = coin.quote.USD.price
      
      console.log(name + " : " + price);
    }
    
 })
.catch((err) => console.log(err));
