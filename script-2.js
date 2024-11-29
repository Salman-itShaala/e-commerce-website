window.addEventListener("load", async () => {
  // todo -> improve this part
  const splittedArray = window.location.href.split("?"); // ["https:///", "id=1"]
  const idPart = splittedArray[1].split("=");

  const id = idPart[1];

  // 'https://dummyjson.com/products/1'

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  const product = await res.json();

  console.log(product);
});
