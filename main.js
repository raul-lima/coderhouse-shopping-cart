let shop = document.getElementById('shop')

let shopItemsData = [{
    id: "1",
    name: "Broken Heart",
    price: "60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/product1.jpg"
}, {
    id: "2",
    name: "Broken Heart",
    price: "60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/product1.jpg"
}, {
    id: "3",
    name: "Broken Heart",
    price: "60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/product1.jpg"
}, {
    id: "4",
    name: "Broken Heart",
    price: "60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "images/product1.jpg"
}]

let cart = []


let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((product) => {
            let { id, name, price, desc, img } = product
            return `
            <div id="product-id-${id}" class="item">
            <img width="220" src="${img}" alt="" />
            <div class="details">
              <h3>${name}</h3>
              <p>${desc}</p>
              <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">0</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
              </div>
            </div>
          </div>
        `;
        })
        .join(""));
};


generateShop()


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
    update(selectedItem)

};

let decrement = (id) => {
    let selectedItem = id;
    let search = cart.find((product) => product.id === selectedItem);

    if (search.quantity === 0) {
        return;
    } else {
        search.quantity -= 1;
    }
    update(selectedItem)
}

let update = (id) => {

    let search = cart.find((product) => product.id === id)
    document.getElementById(id).innerHTML = search.quantity
    calculation()
}

let calculation = () => {
}