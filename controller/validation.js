
function priceCheck() {
    // Get the value of the input field with id="price-field".
    var price = document.getElementById("price-field").value;

    if (isNaN(price) || price < 1 ) {
      alert("Price can't be lower than 1");
    }
  }
