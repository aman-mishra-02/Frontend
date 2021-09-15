//=================
// XMLHttpRequest
//=================

// const Req = new XMLHttpRequest();

// Req.onload = function() {
//     console.log('ALL DONE WITH THE REQUEST')
//     const data = JSON.parse(this.responseText)
//     // console.log(data)

//     console.log("Price :-")
//     console.log(data.ticker.price)
// }

// Req.onerror = function() {
//     console.log('ERROR')
//     console.log(this)
// } 

// Req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd')
// Req.send()

//==========
//  FETCH
//==========

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         // console.log("WAITING FOR RESPONSE TO PARSE...")
//         return res.json()
//     })
//     .then(data => {
//         console.log("Data Parsed")
//         console.log("PRICE = ",data.ticker.price)
//     })
//     .catch(e => {
//         console.log('ERROR!!!',e)
//     })

// const BitCoin = async () => {
//     try{
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await res.json()
//         console.log(data.ticker.price)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

//=========
// Axios
//=========

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke)