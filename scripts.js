const menu = document.querySelector('.menu-items')

// go get me some food from API

fetch('http://localhost:4000/')
// get from my own API
.then(myRes => myRes.json()) // handling promise then formatting to json
.then(data => {
    let html = ''
    data.forEach(eachItem => {
        let htmlItem = `<div class="menu-items__item">
        <h3>${eachItem.title}</h3>
        <p>${eachItem.description}</p>
        </div>`
        console.log('each item => ', eachItem)

        html += htmlItem
    })
    menu.innerHTML = html})
    .catch(err => console.error(err))
    
    
