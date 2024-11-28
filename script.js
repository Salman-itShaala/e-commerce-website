const newArrivals = document.getElementById("new-arrivals");

window.addEventListener("load", async () => {
  const res = await fetch("https://dummyjson.com/products?limit=4");
  const products = await res.json();

  const productArray = products.products;

  for (let i = 0; i < productArray.length; i++) {
    const productDiv = document.createElement("div");
    const productImg = document.createElement("img");

    productImg.setAttribute("src", productArray[i].thumbnail);

    const titlePara = document.createElement("p");

    titlePara.innerText = productArray[i].title;

    const ratingPara = document.createElement("p");

    ratingPara.innerHTML = productArray[i].rating;

    const pricePara = document.createElement("p");
    pricePara.innerText = `$ ${productArray[i].price}`;

    productDiv.append(productImg, titlePara, ratingPara, pricePara);

    newArrivals.appendChild(productDiv);
  }
  console.log(productArray);
});
/*

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
