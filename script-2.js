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
      </div>
`;

    console.log(product);
  } catch (error) {
    console.log(error);
  }
});

/*
<div class="product-img">
        <img
          src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
          alt=""
        />
</div>
      <div class="producct-details">
        <p>Essence Mascara Lash Princess</p>
        <p>4.5</p>
        <p>$ 123</p>
        <p>
          The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula.
        </p>
      </div>

*/

localStorage.setItem("cart-items", [1, 2, 3]);

console.log(localStorage.getItem("cart-items"));
