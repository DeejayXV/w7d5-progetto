document.addEventListener("DOMContentLoaded", function () {
  const par = new searchPar(window.location.search);
  const productId = par.get("productId");
  productDetials(productId);
});

function productDetials(productId) {
  const apiurl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDNlZTdjMjM5YzAwMTUyZjRiOTEiLCJpYXQiOjE3MTgzNjk3NzgsImV4cCI6MTcxOTU3OTM3OH0.SHms9RRYstZ7tCPx7dpD7vKtWGEXDNRoCdf0l_k_tLY";

  fetch(apiurl, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  })
    .then((response) => response.json())
    .then((product) => {
      productDetials(product);
    })
    .catch((error) => console.error("Error:", error));
}

function productDetials(product) {
  console.log(product);
  const detailsContainer = document.getElementById("productDetails");
  detailsContainer.innerText = "";

  const img = document.createElement("img");
  img.src = product.imageUrl;
  img.className = "card-img-top";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = product.name;

  const description = document.createElement("p");
  description.className = "card-text";
  description.innerText = product.description;

  const brand = document.createElement("p");
  brand.className = "card-text";
  brand.innerText = `Marca: ${product.brand}`;

  const price = document.createElement("p");
  price.className = "card-text";
  price.innerText = `Prezzo: €${product.price}`;

  detailsContainer.appendChild(img);
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(brand);
  cardBody.appendChild(price);
  detailsContainer.appendChild(cardBody);
}
