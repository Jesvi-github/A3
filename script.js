// Smoothie Class
class Smoothie {
    constructor(size, ingredients, extras, price) {
      this.size = size;
      this.ingredients = ingredients;
      this.extras = extras;
      this.price = price;
    }
  
    describe() {
      return `
        <strong>Size:</strong> ${this.size}<br>
        <strong>Ingredients:</strong> ${this.ingredients.length > 0 ? this.ingredients.join(", ") : "None"}<br>
        <strong>Extras:</strong> ${this.extras || "None"}<br>
        <strong>Total Price:</strong> $${this.price.toFixed(2)}
      `;
    }
  }
  
  // Price Calculation
  function calculatePrice(size, ingredients, extras) {
    const sizePrices = { Small: 3.0, Medium: 4.5, Large: 6.0 };
    const extraPrices = { "Protein Powder": 2.0, "Chia Seeds": 1.5, "Whipped Cream": 1.0 };
    const sizePrice = sizePrices[size] || 0;
    const extrasPrice = extraPrices[extras] || 0;
    return sizePrice + ingredients.length + extrasPrice;
  }
  
 
  document.getElementById("order-button").addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const ingredients = Array.from(document.querySelectorAll("input[name='ingredient']:checked")).map(input => input.value);
    const extras = document.getElementById("extras").value;
  
    if (!size) {
      alert("Please select a smoothie size!");
      return;
    }
  
    const price = calculatePrice(size, ingredients, extras);
    const smoothie = new Smoothie(size, ingredients, extras, price);
  
    document.getElementById("smoothie-details").innerHTML = smoothie.describe();
  });
  