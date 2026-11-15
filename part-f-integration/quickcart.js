class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }
}

const customer = {
  name: "Rahul",
  email: "rahul@gmail.com"
};

const products = [
  new Product(1, "Laptop", 50000, 1),
  new Product(2, "Mouse", 1000, 2),
  new Product(3, "Monitor", 15000, 1),
  new Product(4, "Keyboard", 2000, 1)
];

const { name: customerName, email } = customer;

const productTotals = products.map(({ name, price, quantity }) => ({
  name,
  total: price * quantity
}));

const expensiveProducts = products.filter((product) => product.getTotal() > 5000);
const orderTotal = products.reduce((total, product) => total + product.getTotal(), 0);
const uniqueProductIds = new Set(products.map((product) => product.id));
const inventory = new Map(products.map((product) => [product.id, product]));

const orderConfig = Object.freeze({
  currency: "INR",
  taxIncluded: false,
  status: "Processing"
});

const order = {
  customer: customerName,
  email,
  products: productTotals,
  total: orderTotal,
  status: orderConfig.status
};

const orderJson = JSON.stringify(order, null, 2);

async function confirmOrder() {
  console.log("====== QUICKCART ORDER SUMMARY ======");
  console.log(`Customer: ${customerName}`);
  console.log("Products:");

  productTotals.forEach((product) => {
    console.log(`${product.name} - ₹${product.total}`);
  });

  console.log(`Total Order Amount: ₹${orderTotal}`);
  console.log(`Unique Products: ${uniqueProductIds.size}`);
  console.log("Order Status: Processing...");

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Order Status: Confirmed Successfully!");
  } catch (error) {
    console.log(`Order Status: Failed - ${error.message}`);
  }

  console.log("=====================================");
}

console.log("Products over ₹5,000:", expensiveProducts.map((product) => product.name));
console.log("Inventory entries:", inventory.size);
console.log("Frozen order configuration:", orderConfig);
console.log("Order JSON:", orderJson);

confirmOrder();
