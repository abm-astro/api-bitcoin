const btn = document.querySelector('button')
btn.addEventListener('click', getOption)

const res = document.querySelector('.res')

function fetchCoin(coin){
  fetch(`https://www.mercadobitcoin.net/api/${coin}/ticker/`)
  .then(response => response.json())
  .then(btcPreco => {
    const preco = Number(btcPreco.ticker.last).toFixed(3)
    res.innerText = 'R$ ' + preco.replace('.', ',')
  })
}

function getOption() {
  const options = document.querySelectorAll('option')
  Array.from(options).forEach(item => {
    if(item.selected) {
      fetchCoin(item.value)
    }
  })
}
