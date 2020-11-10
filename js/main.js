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
  })
  .catch(error => {
    console.error(error.message)
  })