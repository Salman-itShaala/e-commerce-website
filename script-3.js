const products = localStorage.getItem("cart-products").split(",");
const cartLeft = document.querySelector(".cart-left");
const totalPricePara = document.querySelector(".total-price");

window.addEventListener("load", async () => {
  // replace for loop with forEach
  let cartLeftInnerHtml = "";
  let totalPrice = 0;
  //   [1,2,3]
  for (let i = 0; i < products.length; i++) {
    const res = await fetch(`https://dummyjson.com/products/${products[i]}`);
    const product = await res.json();

    // calculating total
    totalPrice = totalPrice + parseFloat(product.price);

    // dom manipulations
    cartLeftInnerHtml =
      cartLeftInnerHtml +
      `<div class="cart-product">
            <img
              src=${product.thumbnail}
              alt=""
            />
            <div class="cart-product-details">
              <p>${product.title}</p>
              <p>${product.price}</p>
            </div>
            <div class="cart-product-actions">
              <button onclick="removeProduct(${product.id})">Delete</button>
            </div>
          </div>
`;
  }

  cartLeft.innerHTML = cartLeftInnerHtml;
  totalPricePara.innerHTML = `Total : $ ${totalPrice.toFixed(2)}`;
});

function removeProduct(id) {}

/*

<div class="cart-product">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
              alt=""
            />
            <div class="cart-product-details">
              <p>Title</p>
              <p>Price</p>
            </div>
            <div class="cart-product-actions">
              <button>Delete</button>
            </div>
          </div>

<div class="cart-product">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
              alt=""
            />
            <div class="cart-product-details">
              <p>Title</p>
              <p>Price</p>
            </div>
            <div class="cart-product-actions">
              <button>Delete</button>
            </div>
          </div>

<div class="cart-product">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
              alt=""
            />
            <div class="cart-product-details">
              <p>Title</p>
              <p>Price</p>
            </div>
            <div class="cart-product-actions">
              <button>Delete</button>
            </div>
          </div>



*/
