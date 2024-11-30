const productSection = document.querySelector(".product-section");

window.addEventListener("load", async () => {
  // todo -> improve this part
  const splittedArray = window.location.href.split("?"); // ["https:///", "id=1"]
  const idPart = splittedArray[1].split("=");

  const id = idPart[1];

  // 'https://dummyjson.com/products/1'

  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    const product = await res.json();

    productSection.innerHTML = `<div class="product-img">
        <img
          src=${product.thumbnail}
          alt=${product.title}
        />
</div>
      <div class="producct-details">
        <p>${product.title}</p>
        <p>${product.rating}</p>
        <p>$ ${product.price}</p>
        <p>
          ${product.description}
        </p>
        <button onclick="addTocard(${id})">Add To Cart</button>
      </div>
`;

    console.log(product);
  } catch (error) {
    console.log(error);
  }
});

function addTocard(id) {
  const productsInCart = localStorage.getItem("cart-products");
  if (!productsInCart) {
    localStorage.setItem("cart-products", [id]);
  }
  const idsArray = productsInCart.split(","); // 1,2,3 = [2,3,1,1,1,1]
  // check if that id already exists in cart array
  idsArray.push(id);
  localStorage.setItem("cart-products", idsArray);
}
