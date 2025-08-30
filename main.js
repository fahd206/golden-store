let products = JSON.parse(localStorage.getItem("products")) || [];

const productsDiv = document.getElementById("products");
const menuToggle = document.getElementById("menu-toggle");
const adminMenu = document.getElementById("admin-menu");

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

// عرض المنتجات عند تحميل الصفحة
showProducts();

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

// إضافة المنتج من صفحة الإشراف
function addProduct() {
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const fileInput = document.getElementById("product-image-file");
  const file = fileInput.files[0];

  if(!name || !price || !file){
    alert("يرجى تعبئة كل الحقول واختيار صورة!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e){
    const imageUrl = e.target.result;
    products.push({name, price, image: imageUrl});
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();

    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    fileInput.value = "";

    alert("تم إضافة المنتج بنجاح!");
  }
  reader.readAsDataURL(file);
}