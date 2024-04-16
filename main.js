let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "1",
        name: "Broken Heart",
        price: "60",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "images/product1.jpg",
    },
    {
        id: "2",
        name: "Broken Heart",
        price: "60",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "images/product1.jpg",
    },
    {
        id: "3",
        name: "Broken Heart",
        price: "60",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "images/product1.jpg",
    },
    {
        id: "4",
        name: "Broken Heart",
        price: "60",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "images/product1.jpg",
    },
];

let cart = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, desc, img, price } = x;
            let search = cart.find((y) => y.id == id) || [];
            return `
      <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${search.quantity === undefined ? 0 : search.quantity
                }</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
      `;
        })
        .join(""));
};

generateShop();

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
    localStorage.setItem("data", JSON.stringify(cart));
};

let update = (id) => {
    let search = cart.find((product) => product.id === id);
    document.getElementById(id).innerHTML = search.quantity;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = cart
        .map((product) => product.quantity)
        .reduce((x, y) => x + y, 0);
};

calculation();

