const bitcoin = document.querySelector("#bt-price");
const ethereumCoin = document.querySelector("#eth-price");
const dogeCoin = document.querySelector("#doge-price");

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd";

// inr url use for indin rupees 

//const inr = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=inr";

function price(){

    fetch(url)
    .then(data => data.json())
    .then(item => {

       bitcoin.textContent = `$${item.bitcoin.usd}`;
       ethereumCoin.textContent = `$${item.ethereum.usd}`;
       dogeCoin.textContent = `$${item.dogecoin.usd}`;
       
    })
    .catch(err => console.log(err));
}

  price();