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
  .then(res => {
          //console.log(res.json());
          res.json()
  })
  .then(json => console.log(json))
//   .then(obj => {
//     console.log(obj)
//     for (let coin of obj.data){
      
//       //console.log(coin.name)
//       let name = coin.name
//       let price = coin.quote.USD.price
      
//       console.log(name + " : " + price);
//     }
    
//  })
.catch((err) => console.log(err));
