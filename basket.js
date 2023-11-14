let cardDesignContainer = document.querySelector('.card_design_container');
let clearAll=document.querySelector('.clear_all')


// basket.forEach(x => {
//     basketContainer.innerHTML += `
//     <div class="first_card">
//     <div class="first_inner_card">
//         <img src="${x.image}"
//             alt="">
       
//     </div>
//     <p>count: ${x.count}</p>
//     <p>${x.name} <span> ${x.price * x.count} man</span></p>
//     <button onclick="addButton(${x.id})" >+</button>
//     <button onclick="deleteButton(${x.id})">-</button>


// </div>
    
//     `
// })


function showBasket(basket) {

    cardDesignContainer.innerHTML = ''
    basket.forEach(x => {
        cardDesignContainer.innerHTML += `
        <div class="child_card_design">
        <div class="child_card_design_inner">
            <img src="${x.image}"
                alt="">
        </div>
        <p>count: ${x.count}</p>
        <p>${x.name} <span> ${x.price * x.count} man</span></p>
        <button onclick="addButton(${x.id})" >+</button>
        <button onclick="deleteButton(${x.id})">-</button>
    </div>
    `
    })
}

function addButton(z) {
    let checkingBasket = basket.find(a => a.id === z)
    checkingBasket.count += 1
    showBasket(basket)
    localStorage.setItem('basket', JSON.stringify(basket))

}

function deleteButton(c) {
    let checkingBasket = basket.find(a => a.id === c)
    checkingBasket.count-=1
    if(checkingBasket.count===0){
        let index=basket.findIndex(data=>data.id===c)
        basket.splice(index,1)
    }
    showBasket(basket)
    localStorage.setItem('basket', JSON.stringify(basket))
   
           
}

window.addEventListener('load', () => {
    showBasket(basket)
})


clearAll.addEventListener('click',()=>{
    basket.splice(0,basket.length)
    showBasket(basket)
    localStorage.setItem('basket', JSON.stringify(basket))
    clearAll.style.display='none'
})

console.log(basket);