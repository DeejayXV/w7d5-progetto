const apiurl = "https://striveschool-api.herokuapp.com/api/product/";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDNlZTdjMjM5YzAwMTUyZjRiOTEiLCJpYXQiOjE3MTgzNjk3NzgsImV4cCI6MTcxOTU3OTM3OH0.SHms9RRYstZ7tCPx7dpD7vKtWGEXDNRoCdf0l_k_tLY";

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

function fetchProducts() {
  fetch(apiurl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  })
    .then((response) => response.json())
    .then((data) => displayProducts(data))
    .catch((error) => console.error("Error:", error));
}

function displayProducts(products) {
  console.log(products);
  const container = document.getElementById("productsContainer");
  container.innerText = "";

  products.forEach((product) => {
    console.log(product);
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 mb-4";

    const link = document.createElement("a");
    link.href = `product-details.html?productId=${product._id}`;
    link.className = "card";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = product.imageUrl;
    img.alt = product.name;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = product.name;

    const description = document.createElement("p");
    description.className = "card-text";
    description.innerText = product.description;

    const id = document.createElement("p");
    id.className = "card-text";
    id.innerText = product.id;

    link.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(id);
    link.appendChild(cardBody);
    productCard.appendChild(link);
    container.appendChild(productCard);
  });
}
