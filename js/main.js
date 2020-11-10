const APIKey = {
  key: 'a36f101f-2917-4580-90e4-70514ae750f7'
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${APIKey.key}`)
  .then(response => {
    if (!response.ok) throw new Error(`DEU RUIM! status: ${response.status}`)
    return response.json()
  })
  .then(api => {
    console.log(api)

    let coins = ''

    for (let i = 0; i < 10; i++) {
      let data = new Date(api.data[i].first_historical_data)
      var newData = data.toLocaleDateString()
      coins += `
        <div class="container">
          <div class="media d-flex flex-wrap alert alert-warning">
            <img src="https://www.sampsoniaway.org/wp-content/uploads/2015/09/Retro-Coin-icon.png" class="align-self-center mr-3" alt="coin image" width="100" height="60"/>
            <div class="media-body">
              <h5 class="mt-2">${api.data[i].name}</h5>
              <p>${api.data[i].symbol}</p>
              <p>Primeira data historica do ${api.data[i].symbol}: ${newData}</p>
            </div>
          </div>
        </div>
      `
      document.getElementById('coins').innerHTML = coins
    }
  })
  .catch(error => {
    console.error(error.message)
  })