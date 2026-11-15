const order = {
  orderId: 501,
  customer: "Rahul",
  amount: 5000,
  deliveryDate: undefined,
  discount: null,
  calculateTax() {
    return 500;
  }
};

const orderJson = JSON.stringify(order);
const parsedOrder = JSON.parse(orderJson);

console.log("Serialized order");
console.log(orderJson);
console.log("Parsed order");
console.log(parsedOrder);
console.log("deliveryDate exists:", Object.hasOwn(parsedOrder, "deliveryDate"));
console.log("calculateTax exists:", Object.hasOwn(parsedOrder, "calculateTax"));

const examples = [
  {
    label: "Undefined in an object",
    run: () => JSON.stringify({ name: "Rahul", age: undefined })
  },
  {
    label: "Undefined in an array",
    run: () => JSON.stringify([10, undefined, 30])
  },
  {
    label: "NaN and Infinity",
    run: () => JSON.stringify({ price: NaN, discount: Infinity })
  },
  {
    label: "Invalid JSON",
    run: () => JSON.parse("{name: 'Rahul', age: 25}")
  },
  {
    label: "Circular reference",
    run: () => {
      const user = { name: "Rahul" };
      user.self = user;
      return JSON.stringify(user);
    }
  },
  {
    label: "Date object",
    run: () => JSON.stringify({ createdAt: new Date("2026-01-01") })
  }
];

for (const example of examples) {
  try {
    console.log(`${example.label}:`, example.run());
  } catch (error) {
    console.log(`${example.label}: ${error.name}: ${error.message}`);
  }
}
