const apiurl = "https://striveschool-api.herokuapp.com/api/product/";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDNlZTdjMjM5YzAwMTUyZjRiOTEiLCJpYXQiOjE3MTgzNjk3NzgsImV4cCI6MTcxOTU3OTM3OH0.SHms9RRYstZ7tCPx7dpD7vKtWGEXDNRoCdf0l_k_tLY";

// function submitForm() {
//   const productId = document.getElementById("productId").value;
//   if (productId) {
//     console.log(productId);
//     updateProduct(productId);
//   } else {
//     createProduct();
//   }
// }

function createProduct() {
  //prendiamo i valori inseriti dall'utente nei campi input nel HTML
  const productData = {
    //assembliamo tutti i valori in un oggetto "productData"
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: parseFloat(document.getElementById("price").value),
  };
  console.log(productData);

  fetch(apiurl, {
    //inviamo una richiesta all'api per creare un nuovo oggetto
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(productData),
  }).then((response) => response.json()); //quando la richiesta viene completata, la risposta viene convertita in JSON
  return response
    .json()
    .then((data) => {
      console.log("Success:", data); //se la richiesta è stata un successo, mostra un alert di successo, alrimenti stampa errore
      alert("Prodotto creato con successo!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Errore nella creazione del prodotto");
    });
}

function updateProduct(productId) {
  //è richiesta un ID del prodotto per specificare quale aggiornare
  const productData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: parseFloat(document.getElementById("price").value),
  };
  console.log(productId);
  console.log(productData);

  fetch(`${apiurl}${productId}`, {
    //inviamo un'altra richiesta prendendo anche l?id del prodotto
    method: "PUT",
    headers: {
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(productData),
  }).then((response) => response.json());
  return response
    .json()
    .then((data) => {
      console.log("Success:", data);
      alert("Prodotto aggiornato con successo!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Errore nell'aggiornamento del prodotto");
    });
}

function deleteProduct() {
  const productId = document.getElementById("productId").value;
  if (productId) {
    //prendiamo l'ID del prodotto, e se non è fortito, mostra un messaggio di errore
    alert("Per favore inserisci un ID prodotto valido.");
    return;
  }
  console.log(productId);

  fetch(`${apiurl}${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  })
    .then((response) => {
      //controlliamo se la risposta è positiva per la cancellazione del prodotto, alrimenti farà vedere un messaggio di errore
      if (response.ok) {
        console.log("Prodotto cancellato con successo!");
        alert("Prodotto cancellato con successo!");
      } else {
        throw new Error("Errore nella cancellazione del prodotto");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Errore nella cancellazione del prodotto");
    });
}
