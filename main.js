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



let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            return `
            <div class="item">
            <img width="220" src="/images/product1.jpg" alt="" />
            <div class="details">
              <h3>Broken Heart</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div class="price-quantity">
                <h2>$ 60</h2>
                <div class="buttons">
                  <i class="bi bi-dash-lg"></i>
                  <div class="quantity">0</div>
                  <i class="bi bi-plus-lg"></i>
                </div>
              </div>
            </div>
          </div>
        `;
        })
        .join(""));
};


generateShop()