const cart = [
  { id: 101, name: "Laptop", price: 50000, quantity: 1, category: "Electronics" },
  { id: 102, name: "Mouse", price: 800, quantity: 2, category: "Accessories" },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, category: "Accessories" },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, category: "Electronics" },
  { id: 105, name: "Headphones", price: 2500, quantity: 2, category: "Accessories" }
];

const productTotals = cart.map((product) => ({
  name: product.name,
  total: product.price * product.quantity
}));

const productsAbove2000 = cart.filter((product) => product.price > 2000);
const totalCartValue = cart.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log("Product totals");
console.log(productTotals);

console.log("\\nProducts above ₹2,000");
console.log(productsAbove2000);

console.log("\\nTotal cart value");
console.log(totalCartValue);

console.log("\\nCart items");
cart.forEach((product) => {
  console.log(`${product.name} | ${product.category} | Quantity: ${product.quantity}`);
});

const electronicsTotal = cart
  .filter((product) => product.category === "Electronics")
  .reduce((total, product) => total + product.price * product.quantity, 0);

console.log("\\nElectronics total");
console.log(electronicsTotal);

const inventory = new Map(cart.map((product) => [product.id, { ...product }]));

console.log("\\nProduct with ID 101");
console.log(inventory.get(101));

const mouse = inventory.get(102);
mouse.quantity += 3;
inventory.set(102, mouse);
inventory.delete(105);

console.log("\\nUpdated inventory");
for (const [productId, product] of inventory) {
  console.log(productId, product);
}

const emailList = [
  "rahul@gmail.com",
  "priya@gmail.com",
  "rahul@gmail.com",
  "arjun@gmail.com",
  "priya@gmail.com"
];

const uniqueEmails = [...new Set(emailList)];
console.log("\\nUnique email addresses");
console.log(uniqueEmails);

const productConfig = {
  name: "Laptop",
  price: 50000,
  stock: 20
};

const frozenProduct = Object.freeze({ ...productConfig });
const sealedProduct = Object.seal({ ...productConfig });

frozenProduct.price = 45000;
frozenProduct.color = "Silver";
delete frozenProduct.stock;

sealedProduct.price = 45000;
sealedProduct.color = "Silver";
delete sealedProduct.stock;

console.log("\\nFrozen product");
console.log(frozenProduct);
console.log("Frozen product extensible:", Object.isExtensible(frozenProduct));
console.log("Frozen product frozen:", Object.isFrozen(frozenProduct));

console.log("\\nSealed product");
console.log(sealedProduct);
console.log("Sealed product extensible:", Object.isExtensible(sealedProduct));
console.log("Sealed product sealed:", Object.isSealed(sealedProduct));
