let sliderFirstContainer = document.querySelector('#slider_first_container');
let leftIcon = document.querySelector('.left_icon');
let rightIcon = document.querySelector('.right_icon');
let basketIcon=document.querySelector('.basket_icon')
let buttons=document.querySelectorAll('.btns_container button');
let buttonsParent=document.querySelector('.btns_container');
let favIcon=document.querySelector('.fav_icon');

let sliderSecondContainer = document.querySelector('.slider_second_container')
let leftSvgIcon=document.querySelector('.left_svg_icon')
let rightSvgIcon=document.querySelector('.right_svg_icon')
let count = 0;

function slider() {
    for (let i = 0; i < sliderFirstContainer.children.length; i++) {
        sliderFirstContainer.children[i].style.transform = `translateX(${-300 * count}px)`
        sliderFirstContainer.children[i].classList.remove('slider_active')
    }
    sliderFirstContainer.children[count + 1].classList.add('slider_active')
}


setInterval(() => {
    if (count < sliderFirstContainer.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
}, 3000);



rightIcon.addEventListener('click', () => {
    if (count < sliderFirstContainer.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
})

leftIcon.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider()
    } else {
        count = 0
        slider()
    }
})

let count2=0

function slider2() {
    for (let i = 0; i < sliderSecondContainer.children.length; i++) {
       sliderSecondContainer.children[i].style.transform = `translateX(${-295 * count2}px)`
    }
}


setInterval(() => {
    if (count2 <sliderSecondContainer.children.length - 4) {
        count2++
        slider2()
    } else {
        count2 = 0
        slider2()
    }
}, 3000);



rightSvgIcon.addEventListener('click', () => {
    if (count2 < sliderSecondContainer.children.length - 4) {
        count2++
        slider2()
    } else {
        count2 = 0
        slider2()
    }
})

leftSvgIcon.addEventListener('click', () => {
    if (count2 > 0) {
        count2--
        slider2()
    } else {
        count2 = 0
        slider2()
    }
})








let newTrendGridContainer = document.querySelector('.new_trend_grid_container')
let productsGridContainer=document.querySelector('.products_grid_container')


products.forEach(data => {
    newTrendGridContainer.innerHTML += `
    <div class="first_card">
                    <div class="first_inner_card">
                        <img src="${data.image}"
                            alt="">
                        <button onclick="addToBasket(${data.id})" class="btns">indi al <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.47245 0H3.83407C3.85639 0 3.87535 0.0102163 3.89705 0.012459C3.94234 0.016994 3.98467 0.0243697 4.02711 0.0382241C4.06264 0.0497361 4.09471 0.0639393 4.12709 0.0811826C4.16435 0.101067 4.19794 0.122646 4.23042 0.149508C4.26031 0.174126 4.28567 0.20034 4.31037 0.229893C4.33584 0.260342 4.35759 0.29134 4.37691 0.326624C4.39688 0.362855 4.41091 0.400032 4.42316 0.4402C4.42982 0.461978 4.4442 0.479471 4.44847 0.502345L4.80614 2.41898L20.0902 3.29475C20.1487 3.29076 20.2004 3.29913 20.2658 3.30511C20.6054 3.33541 20.8575 3.62725 20.8322 3.96055C20.8302 3.98567 20.827 4.00999 20.8221 4.03391L19.7572 9.72875C19.5136 10.6118 18.7634 11.5033 17.635 11.5033H6.50152L6.7399 12.7807H16.1082C17.2943 12.7807 18.2596 13.7272 18.2596 14.8902C18.2596 16.0535 17.2943 17 16.1082 17C14.9221 17 13.9568 16.0535 13.9568 14.8902C13.9568 14.5732 14.0336 14.2754 14.1619 14.0055H8.40916C8.53745 14.2754 8.61425 14.5732 8.61425 14.8902C8.61425 16.0535 7.64894 17 6.46284 17C5.27675 17 4.31144 16.0535 4.31144 14.8902C4.31144 14.0632 4.80395 13.3531 5.51238 13.0075L3.31345 1.22477H1.47245C1.12764 1.22477 0.847885 0.950469 0.847885 0.612383C0.847885 0.274296 1.12764 0 1.47245 0ZM5.82598 7.88338L8.47265 7.92415L8.3285 6.4202L5.53759 6.33817L5.82598 7.88338ZM19.0482 6.73531L16.4034 6.65757L16.2304 8.04355L18.7966 8.08307L19.0482 6.73531ZM15.5679 6.633L12.6609 6.54758V7.98858L15.3934 8.0307L15.5679 6.633ZM12.6609 5.73032L15.6696 5.81878L15.8618 4.27935L12.6609 4.09586V5.73032ZM11.8281 4.04812L8.92165 3.88146L9.08877 5.62532L11.8281 5.70585V4.04812ZM12.6609 8.80529V10.2785H15.1127L15.2916 8.84581L12.6609 8.80529ZM11.8281 8.79249L9.3887 8.75496L9.53473 10.2785H11.8281V8.79249ZM11.8281 7.97578V6.52311L9.1673 6.44487L9.31033 7.937L11.8281 7.97578ZM5.38425 5.51643L8.24997 5.60065L8.08062 3.83327L5.03755 3.6588L5.38425 5.51643ZM16.6945 4.3271L16.5051 5.8433L19.2 5.92254C19.3136 5.31763 19.404 4.84753 19.4811 4.48682L16.6945 4.3271ZM18.5397 9.45884L18.6446 8.89744L16.1286 8.85872L15.9513 10.2785H17.635C18.1701 10.2785 18.4682 9.71001 18.5397 9.45884ZM8.69827 10.2785L8.55102 8.74205L5.97882 8.70243L6.27296 10.2785H8.69827ZM15.2059 14.8902C15.2059 15.3781 15.6105 15.7752 16.1082 15.7752C16.6059 15.7752 17.0105 15.3781 17.0105 14.8902C17.0105 14.4022 16.6059 14.0055 16.1082 14.0055C15.6105 14.0055 15.2059 14.4022 15.2059 14.8902ZM6.46284 15.7752C6.96054 15.7752 7.36513 15.3781 7.36513 14.8902C7.36513 14.4022 6.96054 14.0055 6.46284 14.0055C5.96515 14.0055 5.56056 14.4022 5.56056 14.8902C5.56056 15.3781 5.96515 15.7752 6.46284 15.7752Z"
                                    fill="#1D1D1B" />
                            </svg> </button>
                    </div>

                    <p>${data.name} <span> ${data.price} man</span></p>


                </div>
    
    `
})


function addToBasket(x){
    let checkBasket=basket.find(y=>y.id===x)
    if(checkBasket){
        checkBasket.count+=1
    }else{
        let checkPr=products.find(z=>z.id===x)
        checkPr.count=1
        basket.push(checkPr)
    }

    console.log(basket);
    localStorage.setItem('basket',JSON.stringify(basket))
}


basketIcon.addEventListener('click',()=>{
    window.location.href='./basket.html'
})


products2.forEach(data=>{
    productsGridContainer.innerHTML+=`
    <div class="products_grid_card" data-x="${data.dataX}">
                        <img src="${data.image}" alt="">
                        <p >${data.name}</p>
                        
                        <span>${data.price}M</span>
                        <div class="buy_btns">
                            <button onclick="addToCart2(${data.id})">İndi al <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.47658 0H3.83821C3.86052 0 3.87948 0.0102163 3.90118 0.012459C3.94647 0.016994 3.98881 0.0243697 4.03125 0.0382241C4.06678 0.0497361 4.09885 0.0639393 4.13123 0.0811826C4.16848 0.101067 4.20208 0.122646 4.23456 0.149508C4.26445 0.174126 4.28981 0.20034 4.31451 0.229893C4.33998 0.260342 4.36173 0.29134 4.38104 0.326624C4.40102 0.362855 4.41505 0.400032 4.4273 0.4402C4.43395 0.461978 4.44834 0.479471 4.45261 0.502345L4.81028 2.41898L20.0943 3.29475C20.1529 3.29076 20.2045 3.29913 20.27 3.30511C20.6095 3.33541 20.8616 3.62725 20.8364 3.96055C20.8344 3.98567 20.8311 4.00999 20.8262 4.03391L19.7613 9.72875C19.5177 10.6118 18.7675 11.5033 17.6392 11.5033H6.50566L6.74404 12.7807H16.1123C17.2984 12.7807 18.2637 13.7272 18.2637 14.8902C18.2637 16.0535 17.2984 17 16.1123 17C14.9262 17 13.9609 16.0535 13.9609 14.8902C13.9609 14.5732 14.0377 14.2754 14.166 14.0055H8.41331C8.54159 14.2754 8.61839 14.5732 8.61839 14.8902C8.61839 16.0535 7.65308 17 6.46698 17C5.28088 17 4.31558 16.0535 4.31558 14.8902C4.31558 14.0632 4.80809 13.3531 5.51652 13.0075L3.31759 1.22477H1.47658C1.13177 1.22477 0.85202 0.950469 0.85202 0.612383C0.85202 0.274296 1.13177 0 1.47658 0ZM5.83012 7.88338L8.47679 7.92415L8.33264 6.4202L5.54173 6.33817L5.83012 7.88338ZM19.0524 6.73531L16.4076 6.65757L16.2346 8.04355L18.8007 8.08307L19.0524 6.73531ZM15.5721 6.633L12.665 6.54758V7.98858L15.3975 8.0307L15.5721 6.633ZM12.665 5.73032L15.6737 5.81878L15.866 4.27935L12.665 4.09586V5.73032ZM11.8323 4.04812L8.92579 3.88146L9.09291 5.62532L11.8323 5.70585V4.04812ZM12.665 8.80529V10.2785H15.1169L15.2958 8.84581L12.665 8.80529ZM11.8323 8.79249L9.39284 8.75496L9.53887 10.2785H11.8323V8.79249ZM11.8323 7.97578V6.52311L9.17144 6.44487L9.31447 7.937L11.8323 7.97578ZM5.38838 5.51643L8.25411 5.60065L8.08476 3.83327L5.04169 3.6588L5.38838 5.51643ZM16.6986 4.3271L16.5093 5.8433L19.2042 5.92254C19.3177 5.31763 19.4082 4.84753 19.4852 4.48682L16.6986 4.3271ZM18.5439 9.45884L18.6487 8.89744L16.1328 8.85872L15.9555 10.2785H17.6392C18.1743 10.2785 18.4723 9.71001 18.5439 9.45884ZM8.70241 10.2785L8.55516 8.74205L5.98296 8.70243L6.27709 10.2785H8.70241ZM15.21 14.8902C15.21 15.3781 15.6146 15.7752 16.1123 15.7752C16.61 15.7752 17.0146 15.3781 17.0146 14.8902C17.0146 14.4022 16.61 14.0055 16.1123 14.0055C15.6146 14.0055 15.21 14.4022 15.21 14.8902ZM6.46698 15.7752C6.96468 15.7752 7.36927 15.3781 7.36927 14.8902C7.36927 14.4022 6.96468 14.0055 6.46698 14.0055C5.96929 14.0055 5.5647 14.4022 5.5647 14.8902C5.5647 15.3781 5.96929 15.7752 6.46698 15.7752Z"
                                        fill="#1D1D1B" />
                                </svg>
                            </button>

                            <button onclick="addToFav(${data.id},this)">
    <svg class="fav_icon_svg" style="color:${favArr.find(y=>y.id===data.id)? 'red': 'black'}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
    </svg>
</button>
                                
                            </button>
                        </div>
                    </div>
    
    `
})



function addToCart2(a){
    let checkBasket=basket.find(y=>y.id===a)
    if(checkBasket){
        checkBasket.count+=1
    }else{
        let checkPr=products2.find(z=>z.id===a)
        checkPr.count=1
        basket.push(checkPr)
    }

    console.log(basket);
    localStorage.setItem('basket',JSON.stringify(basket))
}
let productCards=document.querySelectorAll('.products_grid_card')

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        buttonsParent.querySelector('.active_btn').classList.remove('active_btn')
        buttons[i].classList.add('active_btn')


        let getButtonAtribute=buttons[i].getAttribute('data-x')

        console.log(getButtonAtribute);

        for(let i=0;i<productCards.length;i++){
            let getCardAtribute=productCards[i].getAttribute('data-x')
            console.log(getCardAtribute);
            if(getButtonAtribute===getCardAtribute || getButtonAtribute==='butunmehsullar'){
                productCards[i].classList.add('show')
                productCards[i].classList.remove('hide')
            }else{
                productCards[i].classList.add('hide')
                productCards[i].classList.remove('show')
            }
        }



    })
}


favIcon.addEventListener('click',()=>{
    window.location.href='./favorite.html'
})




function addToFav(x, button) {
    // localStorage-dan mövcud favorit məhsulları əldə et

    let checkFav = favArr.find(data => data.id === x);

    if (checkFav) {
        let index = favArr.findIndex(data => data.id === x);
        favArr.splice(index, 1);

        // Qırmızıdan qara dəyişdir
        button.querySelector('.fav_icon_svg').style.fill = 'black';
    } else {
        let checkPr = products2.find(data => data.id === x);
        favArr.push(checkPr);

        // Qaradan qırmızıya dəyişdir
        button.querySelector('.fav_icon_svg').style.fill = 'red';
    }

    console.log(favArr);

    // localStorage-ı yenidən qur, güncəllə
    localStorage.setItem('favorits', JSON.stringify(favArr));
}

// Səhifə yükləndikdə localStorage-dan favorit məhsulları əldə et

// Favorit məhsulların üzərində dolaşmaq üçün funksiya
// function updateFavIcons() {
//     favArr.forEach(fav => {
//         let button = document.querySelector(`[onclick="addToFav(${fav.id}, this)"]`);
//         if (button) {
//             button.querySelector('.fav_icon_svg').style.fill = 'red';
//         }
//     });
// }

// // Səhifə yükləndikdə ikonları güncəllə
// updateFavIcons();
