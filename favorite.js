let favoriteContainer = document.querySelector('.card_design_container');




function showFav(arr){
    favoriteContainer.innerHTML=""
    arr.forEach(data => {
        favoriteContainer.innerHTML += `
    
        <div class="child_card_design">
        <div class="child_card_design_inner">
            <img src="${data.image}"
                alt="">
                <svg onclick="removeFav(${data.id})" class="heart_icon"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" ></path> </svg>
        </div>
        
       
    </div>
        
        
        `
    })
    
    
}



function removeFav(x){
    let index=favArr.findIndex(data=>data.id===x)
    favArr.splice(index,1)
    showFav(favArr)
    localStorage.setItem('favorits',JSON.stringify(favArr))

}


window.addEventListener('load',()=>{
    showFav(favArr)
})