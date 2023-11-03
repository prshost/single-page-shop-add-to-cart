let carts = document.querySelector('.carts span');
let add = document.querySelectorAll('#add');
let basket = document.querySelector('.basket');
let nav = document.querySelectorAll('.nav li');
let items = document.querySelectorAll('.items .item')
let detaNav,detaProduct;
let length = carts.nextElementSibling.textContent

nav.forEach( navbar => {
    
    navbar.addEventListener('click', (e) => {
        e.preventDefault()
        for( let i = 0; i < nav.length; i++) {
            nav[i].children[0].classList.remove('active')
        }
        detaNav = e.target.parentElement.getAttribute('data-item')
        e.target.classList.add('active')
        items.forEach( product => {
            detaProduct = product.getAttribute('data-product')
            product.style.transform = 'scale(0)';
            setTimeout(() => {
                product.style.display = 'none'
            }, 300);
            if ( detaNav == detaProduct || detaNav == 'all' ) {
                product.style.transform = 'scale(1)';
               
                setTimeout(() => {
                    product.style.display = 'block'
                }, 300);
                
                
            }
        
        })
        
    })

})

add.forEach( b => {
    b.addEventListener('click', (e) => {
        let clone = e.target.parentElement.parentElement.parentElement.cloneNode(true);
        basket.appendChild(clone)
        carts.nextElementSibling.textContent = ++length
    })
})
carts.addEventListener('click', (e) => {
    if( length > 0 ) {
        basket.classList.toggle('active-cart')
    }
})
basket.addEventListener('click', (e) => {
    
    if ( e.layerX > 6 && e.layerX < 35 && e.layerY > 40 && e.layerY < 70) {
        e.target.remove()
        carts.nextElementSibling.textContent = --length
        if( length == 0 ) {
            basket.classList.remove('active-cart')
        }
    }

})