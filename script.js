const newArrivals = document.getElementById("new-arrivals");

window.addEventListener("load", async () => {
  const res = await fetch("https://dummyjson.com/products?limit=4");
  const products = await res.json(); // {   products: [{thumbnail: "img"},{},{},{}]   }

  const productArray = products.products;

  for (let i = 0; i < productArray.length; i++) {
    const productDiv = document.createElement("div");
    const productLink = document.createElement("a");

    const productImg = document.createElement("img");

    productLink.setAttribute("href", `product-page.html?id=${i + 1}`);

    productLink.appendChild(productImg);

    productImg.setAttribute("src", productArray[i].thumbnail);

    const titlePara = document.createElement("p");

    titlePara.innerText = productArray[i].title;

    const ratingPara = document.createElement("p");

    ratingPara.innerHTML = productArray[i].rating;

    const pricePara = document.createElement("p");
    pricePara.innerText = `$ ${productArray[i].price}`;

    productDiv.append(productLink, titlePara, ratingPara, pricePara);

    newArrivals.appendChild(productDiv);
  }
});
/*
<a href="product.html?id=1"
<div class="product">
          <img
            src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            width="300"
          />
          <p>Essence Mascara Lash Princess</p>
          <p>4.5</p>
          <p>$123.00</p>
</div>

*/
