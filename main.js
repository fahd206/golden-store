let products = [];

const productsDiv = document.getElementById("products");

function showProducts() {
  productsDiv.innerHTML = "";
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
}

function buyProduct(name, price) {
  const whatsappNumber = "9647702006007"; // ضع رقمك هنا بصيغة دولية
  const url = `https://wa.me/${whatsappNumber}?text=أرغب في شراء المنتج: ${name} بسعر: ${price} IQD`;
  window.open(url, "_blank");
}

// القائمة الجانبية
const menuToggle = document.getElementById("menu-toggle");
const adminMenu = document.getElementById("admin-menu");

menuToggle.addEventListener("click", () => {
  adminMenu.classList.toggle("show");
});

// الانتقال لقسم الإشراف مع كلمة السر
function openAdmin() {
  const password = prompt("ادخل كلمة السر للوصول لقسم الإشراف:");
  if(password === "2006"){ // رمز جديد لقسم الإشراف
    window.location.href = "admin.html";
  } else {
    alert("كلمة السر خاطئة!");
  }
}

// إضافة منتج من صفحة الإشراف
function addProduct() {
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const fileInput = document.getElementById("product-image-file");
  const file = fileInput.files[0];

  if (!name || !price || !file) {
    alert("يرجى تعبئة كل الحقول واختيار صورة!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const imageUrl = e.target.result; // صورة بصيغة Base64
    products.push({ name, price, image: imageUrl });
    showProducts();

    // تنظيف الحقول بعد الإضافة
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    fileInput.value = "";

    alert("تم إضافة المنتج بنجاح!");
  }
  reader.readAsDataURL(file);
}

// عرض أي منتجات موجودة مسبقًا
showProducts();