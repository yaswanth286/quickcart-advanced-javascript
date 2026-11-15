{
  function Product(productName, price, category) {
    this.productName = productName;
    this.price = price;
    this.category = category;
  }

  Product.prototype.displayProduct = function () {
    return `${this.productName} - ₹${this.price} (${this.category})`;
  };

  const firstProduct = new Product("Laptop", 50000, "Electronics");
  const secondProduct = new Product("Mouse", 800, "Accessories");
  const thirdProduct = new Product("Monitor", 12000, "Electronics");

  console.log("Prototype-based products");
  [firstProduct, secondProduct, thirdProduct].forEach((product) => {
    console.log(product.displayProduct());
  });
}

{
  class Product {
    constructor(productName, price, category) {
      this.productName = productName;
      this.price = price;
      this.category = category;
    }

    getProductDetails() {
      return `${this.productName} - ₹${this.price} (${this.category})`;
    }
  }

  class ElectronicProduct extends Product {
    constructor(productName, price, category, warrantyYears) {
      super(productName, price, category);
      this.warrantyYears = warrantyYears;
    }

    getWarrantyDetails() {
      return `${this.productName} has a ${this.warrantyYears}-year warranty`;
    }
  }

  class ClothingProduct extends Product {
    constructor(productName, price, category, size) {
      super(productName, price, category);
      this.size = size;
    }

    getSizeDetails() {
      return `${this.productName} is available in size ${this.size}`;
    }
  }

  const laptop = new ElectronicProduct("Laptop", 50000, "Electronics", 2);
  const shirt = new ClothingProduct("Shirt", 1200, "Clothing", "L");

  console.log("\\nES6 classes");
  console.log(laptop.getProductDetails());
  console.log(laptop.getWarrantyDetails());
  console.log(shirt.getProductDetails());
  console.log(shirt.getSizeDetails());
}

const customer = {
  name: "Rahul",
  email: "rahul@gmail.com",
  city: "Mumbai"
};

const finalPrice = (price, discount) => price - price * discount / 100;
const confirmation = `Hello Rahul, your order of Laptop is confirmed. Total: ₹50000.`;
const { name, email } = customer;

function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

const originalProduct = { name: "Laptop", price: 50000, category: "Electronics" };
const discountedProduct = { ...originalProduct, price: finalPrice(originalProduct.price, 10) };

console.log("\\nES6 syntax");
console.log(finalPrice(50000, 10));
console.log(confirmation);
console.log(name, email);
console.log(calculateTotal(50000, 800, 1500));
console.log("Original product:", originalProduct);
console.log("Copied product:", discountedProduct);
