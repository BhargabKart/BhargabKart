document.addEventListener("DOMContentLoaded", async function () {
    const productList = document.getElementById("product-list");

    if (productList) {
        let response = await fetch("https://www.instagram.com/lonewolf.04_?igsh=ejIyYms3cmVoMDd6");
        let products = await response.json();
        
        products.forEach(product => {
            let div = document.createElement("div");
            div.innerHTML = `<h3>${product.name}</h3><p>💲${product.price}</p>`;
            productList.appendChild(div);
        });
    }

    const signInForm = document.getElementById("signin-form");
    if (signInForm) {
        signInForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            
            let response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            let data = await response.json();
            alert(data.message);
        });
    }
});