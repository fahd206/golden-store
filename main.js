const products = [
  {
    name: "منتج 1",
    price: "5000",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "منتج 2",
    price: "3000",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "منتج 3",
    price: "4500",
    image: "https://via.placeholder.com/200"
  }
];

const productsDiv = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>السعر: ${product.price} IQD</p>
    <button onclick="buyProduct('${product.name}', '${product.price}')">شراء</button>
  `;
  productsDiv.appendChild(div);
});

function buyProduct(name, price) {
  const whatsappNumber = "رقمك"; // استبدل برقمك
  const url = `https://wa.me/${whatsappNumber}?text=أرغب في شراء المنتج: ${name} بسعر: ${price} IQD`;
  window.open(url, "_blank");
}