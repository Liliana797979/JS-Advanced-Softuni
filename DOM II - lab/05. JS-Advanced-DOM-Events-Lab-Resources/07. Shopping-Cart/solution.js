function solve() {
    document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
    document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

    const cart = [];
    const output = document.getElementsByTagName('textarea')[0];
    output = "";

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
            const product = ev.target.parentNode;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            cart.push({
                name,
                price
            });
            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        }
    }
    function checkout() {
        const products = new Set();
        cart.forEach(p => products.add(p.name));
        
        const total = cart.reduce((t, c) => t + c.price, 0);

        output.value += `You bought ${[...products.keys()].join(', ')}} for ${total.toFixed(2)}.`;
    }
}

function solve() {
    let products = document.getElementsByClassName("product");
    let textArea = document.getElementsByTagName("textarea")[0];
    let check = document.querySelector(".checkout");
    let totalPrice = 0;
    let productList = [];
  
    Array.from(products).forEach((p) =>
      p.addEventListener("click", function () {
        let name = p.getElementsByClassName("product-title")[0].textContent;
        let price = p.getElementsByClassName("product-line-price")[0].textContent;
        if (!productList.includes(name)) {
          productList.push(name);
        }
        totalPrice += +price;
        textArea.value += `Added ${name} for ${price} to the cart.\n`;
      })
    );
    check.addEventListener("click", function () {
      let list = productList.join(", ");
      totalPrice = totalPrice.toFixed(2);
      textArea.value += `You bought ${list} for ${totalPrice}.`;
      let buttons = Array.from(document.querySelectorAll("button"));
      buttons.forEach((button) => (button.disabled = true));
    });
  }