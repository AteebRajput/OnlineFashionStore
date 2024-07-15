//=========================================================================
// All DOM ELements
//=========================================================================
const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const cartIcon = document.getElementById("cart-icon");
const cartBtn = document.getElementById("cart")
const cartClose = document.getElementById("cart-close-icon")
const allLinks = document.querySelectorAll('a')
const allProductContainer = document.getElementById("all-products")
const cartItems = document.getElementById("cart-items-container")
const totalBill = document.getElementById("total-bill")
const  totalCartItems = document.getElementById("total-cart-items")
const search = document.getElementById("search")



//=========================================================================
// Required Variable and Array
//=========================================================================

const allProducts = [
    {
        title : 'Reading Glasses',
        category : 'Glasses',
        price : '150',
        thumbnail : './images/glasses/glases-1.jpg'
    },
    {
        title : 'Bifocals Glasses',
        category : 'Glasses',
        price : '120',
        thumbnail : './images/glasses/glasses-2.jpg'
    },
    {
        title : 'BLue Light Glasses',
        category : 'Glasses',
        price : '160',
        thumbnail : './images/glasses/glass-4.jpg'
    },
    {
        title : 'Polarized',
        category : 'Glasses',
        price : '250',
        thumbnail : './images/glasses/glass-7.jpg'
    },
    {
        title : 'Single Vision',
        category : 'Glasses',
        price : '650',
        thumbnail : './images/glasses/glass-6.jpg'
    },
    {
        title : 'Fashion Glasses',
        category : 'Glasses',
        price : '190',
        thumbnail : './images/glasses/glass-5.jpg'
    },
    {
        title : 'Study Glasses',
        category : 'Glasses',
        price : '50',
        thumbnail : './images/glasses/glasses-3.jpg'
    },
    {
        title : 'Dive Watch',
        category : 'Watches',
        price : '1050',
        thumbnail : './images/watches/watch-1.jpg'
    },
    {
        title : 'Pilot Watch',
        category : 'Watches',
        price : '1550',
        thumbnail : './images/watches/watch-5.jpg'
    },
    {
        title : 'Smart Watch',
        category : 'Watch',
        price : '1450',
        thumbnail : './images/watches/watch-2.jpg'
    },
    {
        title : 'G-Shock',
        category : 'Watch',
        price : '1950',
        thumbnail : './images/watches/watch-3.jpg'
    },
    {
        title : 'Chronograph Watch',
        category : 'Watch',
        price : '1500',
        thumbnail : './images/watches/watch-4.jpg'
    },
    {
        title : 'Automatic Watch',
        category : 'Watch',
        price : '600',
        thumbnail : './images/watches/watch-6.jpg'
    },
    {
        title : 'Skeleton Watch',
        category : 'Watch',
        price : '1560',
        thumbnail : './images/watches/watch-7.jpg'
    },
    {
        title : 'Loafer',
        category : 'Shoes',
        price : '442',
        thumbnail : './images/shoes/shoe-1.jpg'
    },
    {
        title : 'Loafer',
        category : 'Shoes',
        price : '300',
        thumbnail : './images/shoes/shoe-1.jpg'
    },
    {
        title : 'Running Shoes',
        category : 'Shoes',
        price : '1500',
        thumbnail : './images/shoes/shoe-2.jpg'
    },
    {
        title : 'Sneakers',
        category : 'Shoes',
        price : '1500',
        thumbnail : './images/shoes/shoe-3.jpg'
    },
    {
        title : 'Casual Sneakers',
        category : 'Shoes',
        price : '1400',
        thumbnail : './images/shoes/shoe-4.jpg'
    },
    {
        title : 'Sports Shoes',
        category : 'Shoes',
        price : '1500',
        thumbnail : './images/shoes/shoe-5.jpg'
    },
    {
        title : 'Stiletto',
        category : 'Shoes',
        price : '1600',
        thumbnail : './images/shoes/shoe-6.jpg'
    },
    {
        title : 'Heels',
        category : 'Shoes',
        price : '1500',
        thumbnail : './images/shoes/shoe-7.jpg'
    },
]

let cartProduct = [];
let filteredProduct = [];

//=========================================================================
// All Functions
//=========================================================================

const updateAllProductsDOM = () => {
    // Get all products
    if(allProducts.length === 0){
        allProductContainer.innerHTML = `
        <p>No Products</p>
        
        `;
        
        return;
    }

    allProductContainer.innerHTML = filteredProduct.map((product, index) => {
        return `
            <div class="product-card">
                <img class="product-img" src="${product.thumbnail}" alt="product-image-${index}">
                <div class="product-detail">
                    <h2>${product.title}</h2>
                    <small class="category-name">category: ${product.category}</small>
                    <p>Price $<span>${product.price}</span></p>
                    <button data-index="${index}" class="cartBtn">
                        <svg class="cart-add" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                        </svg>
                        ADD TO CART
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product">
                            <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join("");

    const allProductToCart = document.getElementsByClassName('cartBtn');
    Array.from(allProductToCart).forEach(btn => btn.addEventListener('click', addToCart));
};

// 2 - Function to Add product in cart
const addToCart = (e) => {
    let target = e.target;

    // Traverse up the DOM tree to find the button with the data-index attribute
    while (target && !target.getAttribute('data-index')) {
        target = target.parentElement;
    }

    if (target) {
        const index = target.getAttribute('data-index');
        console.log("Product index:", index);
        // Add the product to the cart using the index
        cartProduct.push(filteredProduct[parseInt(index)]);
        // Optionally, you can call a function to update the cart DOM
        updateCartDOM();
    } else {
        console.error('No data-index attribute found');
    }
};


// 3- Function to update Cart

const updateCartDOM = () => {
    // Get all products
    if(cartProduct.length === 0){
        cartItems.innerHTML = `
        <p class="cart-line">No Product Found</p>
        `;
        totalBill.innerHTML = `0`;
        return;
    }
    cartItems.innerHTML = cartProduct.map((product,index) => {
        return `
            <div class="cart-product-card">
                <img src="${product.thumbnail}" alt="cart-product-${index}">
                <div class="cart-product-detail">
                    <p class="p-title">${product.title}</p>
                    <small>category: ${product.category}</small>
                    <p>Price:$<span>${product.price}</span></p>
                </div>
                <button data-index = "cart-product-${index}" class="cart-product-remove">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
    }).join("");
    const removeCartProduct = document.getElementsByClassName('cart-product-remove');
    Array.from(removeCartProduct).forEach(btn => btn.addEventListener('click', removeProductFromCart));
  
// calculate the total bill for the cart

    let amount = 0;
    cartProduct.forEach(prod => {
        amount += parseInt(prod.price);
    });
    totalBill.innerHTML =  `${amount}`;
    let count = cartProduct.length;
    totalCartItems.innerHTML = `${count}`;
    


};

// 4- Function to remove product from cart

const removeProductFromCart = (e) => {
    let target = e.target;

    // Traverse up the DOM tree to find the button with the data-index attribute
    while (target && !target.getAttribute('data-index')) {
        target = target.parentElement;
    }

    if (target) {
        const index = target.getAttribute('data-index').split('-')[2];
        console.log("Remove index:", index);
        // Add the product to the cart using the index
        //cartProduct.push(allProducts[parseInt(index)]);
        //cartProduct = cartProduct.filter((product,index) => index !== parseInt(index));
        cartProduct.splice(parseInt(index),1);
        // Optionally, you can call a function to update the cart DOM
        updateCartDOM();
    } else {
        console.error('No data-index attribute found');
    }
}

// 5- Filter Products

const filterProducts = (text = "")=>{
    text = text.toLowerCase();
    filteredProduct = allProducts.filter((product) =>
        {
            if(product.title.toLowerCase().includes(text) || product.category.toLowerCase().includes(text)){
                return product;
            }
            })
            updateAllProductsDOM();
}

// =========================================================================
// All Event Listener
// =========================================================================
//1- Click Menu Icon to toggle nav-links

menuBtn.addEventListener('click', e =>{
    if(!navLinks.classList.contains('show')){
        navLinks.classList.add('show');
        menuIcon.classList = "fa-solid fa-xmark";
        //console.log(navLinks.classList);
    }
    else{
        navLinks.classList.remove('show');
        menuIcon.classList = "fa-solid fa-bars";
    }
    })

// 2- Click on Cart Icon to show Cart product
cartIcon.addEventListener('click',e=>{
    if(!cartBtn.classList.contains('show')){
        cartBtn.classList.add('show');
        console.log(cartBtn)
    }
    else{
        cartBtn.classList.remove('show');
    }
})    

// 3 - Click on Cart Close icon to Close Cart

cartClose.addEventListener('click',e=>{

    cartBtn.classList.remove('show');

})

// 4 - Hide Nav-links on clicking any link

allLinks.forEach(
    link => link.addEventListener('click', e=>{
        navLinks.classList.remove('show');
        menuIcon.classList = "fa-solid fa-bars";
        
    })
)

// 5 - Search Event Listener

search.addEventListener('input', e => filterProducts(e.target.value.toLowerCase()));
     


//================================================================
// init - Immediately Run functions
//================================================================  
filterProducts();
updateAllProductsDOM();
updateCartDOM();