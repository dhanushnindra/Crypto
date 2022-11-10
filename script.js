const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=USD&CMC_PRO_API_KEY=59061bf5-18f0-4604-8f07-0fef5bbed287"
fetch(url,{mode:'cors'})
  .then((res) => res.json())
  .then((json) => console.log(json.data[0].name);
