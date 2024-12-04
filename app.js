let coinNum = document.getElementById('coinNumber')
let image = document.getElementById('image')

let counCoin = localStorage.getItem('coin') || 0
image.addEventListener('click', () => {
    counCoin++
    localStorage.setItem('coin', counCoin)
    coinNum.innerHTML = counCoin
})
coinNum.innerHTML = localStorage.getItem('coin')