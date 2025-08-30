let products = [];

const productsDiv = document.getElementById("products");
const menuToggle = document.getElementById("menu-toggle");
const adminMenu = document.getElementById("admin-menu");

// رابط JSON مباشر على GitHub Raw
const productsURL = "https://raw.githubusercontent.com/fahd206/golden-store/main/products.json";

// جلب المنتجات من الإنترنت
function loadProducts() {
  fetch(productsURL)
    .then(res => res.json())
    .then(data => {
      products = data;
      showProducts();
    })
    .catch(err => console.log("خطأ في جلب المنتجات:", err));
}

// عرض المنتجات
function showProducts() {
  productsDiv.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>السعر: ${product.price} IQD</p>
      <button onclick="buyProduct('${product.name}','${product.price}')">شراء</button>
    `;
    productsDiv.appendChild(div);
  });
}

// فتح واتساب عند الشراء
function buyProduct(name, price) {
  const whatsappNumber = "9647702006007"; // ضع رقمك هنا
  const url = `https://wa.me/${whatsappNumber}?text=أرغب في شراء المنتج: ${name} بسعر: ${price} IQD`;
  window.open(url, "_blank");
}

// القائمة الجانبية
menuToggle.addEventListener("click", () => {
  adminMenu.classList.toggle("show");
});

// رمز قسم الإشراف 2006
function openAdmin() {
  const password = prompt("ادخل رمز قسم الإشراف:");
  if(password === "2006"){
    window.location.href = "admin.html";
  } else {
    alert("رمز خاطئ!");
  }
}

// تحميل المنتجات عند فتح الصفحة
loadProducts();