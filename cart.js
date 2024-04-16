let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let cart = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = cart
        .map((product) => product.quantity)
        .reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
    if (cart.length !== 0) {
        return (shoppingCart.innerHTML = cart
            .map((x) => {
                let { id, quantity, name, img, price } = x;
                console.log("ID:", id);
                let search = shopItemsData.find((y) => y.id == id);
                console.log("Search result:", search);
                return `<div class="cart-item">
                        <img width="100" src="${search ? search.img : ""}"/>
                        <div class="details">
                            <div class="title-price-x">
                                <h4 class="title-price"><p>${search ? search.name : ""
                    }</p>
                                <p class="cart-item-price">$ ${search ? search.price : ""
                    }</p>
                                </h4>
            
                            </div>
                            <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${quantity}
                    </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                          </div>

                          <h3>$ ${quantity * search.price}</h3>
                          <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                        </div>
                    </div>`;
            })
            .join(""));
    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
            <h2 class="empty-cart">The cart is empty</h2>
            <a href="index.html">
                <button class="home-button">Back to home</button>
            </a>`;
    }
};

generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = cart.find((product) => product.id === selectedItem);

    if (search === undefined) {
        cart.push({
            id: selectedItem,
            quantity: 1,
        });
    } else {
        search.quantity += 1;
    }
    generateCartItems();
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(cart));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = cart.find((x) => x.id === selectedItem);

    if (search === undefined) return;

    if (search.quantity === 0) {
        return;
    } else {
        search.quantity -= 1;
    }
    update(selectedItem);
    cart = cart.filter((x) => x.quantity !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(cart));
};

let update = (id) => {
    let search = cart.find((product) => product.id === id);
    document.getElementById(id).innerHTML = search.quantity;
    calculation();
    totalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
    cart = cart.filter((x) => x.id !== selectedItem);
    generateCartItems();
    totalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(cart));
    console.log(selectedItem);
};

let clearCart = () => {
    cart = []
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(cart));
}

let totalAmount = () => {
    if (cart.length !== 0) {
        let amount = cart
            .map((x) => {
                let { id, quantity } = x;
                let filterData = shopItemsData.find((x) => x.id == id);
                return filterData.price * quantity;
            })
            .reduce((x, y) => x + y, 0);

        label.innerHTML = `
            <h2>Total Bill : $ ${amount}</h2>
            <button class="checkout">Checkout</button>
            <button onclick="clearCart()" class="remove-all">Clear Cart</button>
        `;
    } else {
        return;
    }
};

totalAmount();
