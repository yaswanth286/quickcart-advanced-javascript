console.log("Event loop output");
console.log("Order Started");
setTimeout(() => console.log("Payment Processing"), 0);
Promise.resolve().then(() => console.log("Payment Successful"));
console.log("Order Completed");

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function validateOrder(callback) {
  setTimeout(() => {
    console.log("Order Validated");
    callback();
  }, 1000);
}

function processPayment(callback) {
  setTimeout(() => {
    console.log("Payment Completed");
    callback();
  }, 1000);
}

function sendConfirmation(callback) {
  setTimeout(() => {
    console.log("Confirmation Sent");
    callback();
  }, 1000);
}

function runCallbackFlow() {
  console.log("\\nCallback order flow");
  validateOrder(() => {
    processPayment(() => {
      sendConfirmation(() => {
        console.log("Order flow completed");
      });
    });
  });
}

function validateOrderPromise() {
  return wait(1000).then(() => {
    console.log("Order Validated");
    return "Order Validated";
  });
}

function processPaymentPromise() {
  return wait(1000).then(() => {
    console.log("Payment Completed");
    return "Payment Completed";
  });
}

function sendConfirmationPromise() {
  return wait(1000).then(() => {
    console.log("Confirmation Sent");
    return "Confirmation Sent";
  });
}

function runPromiseFlow() {
  console.log("\\nPromise order flow");
  return validateOrderPromise()
    .then(() => processPaymentPromise())
    .then(() => sendConfirmationPromise())
    .then(() => console.log("Order completed successfully"))
    .catch((error) => console.log("Order failed:", error.message));
}

async function placeOrder() {
  console.log("\\nAsync/await order flow");

  try {
    await wait(1000);
    console.log("Order Validated");

    await wait(1000);
    console.log("Payment Completed");

    await wait(1000);
    console.log("Confirmation Sent");

    console.log("Order completed successfully");
  } catch (error) {
    console.log("Order failed:", error.message);
  }
}

function productsAPI() {
  return wait(1000).then(() => "Products Loaded");
}

function paymentAPI() {
  return wait(1500).then(() => {
    throw new Error("Payment Service Failed");
  });
}

function deliveryAPI() {
  return wait(2000).then(() => "Delivery Loaded");
}

async function runPromiseCombinators() {
  const requests = [productsAPI(), paymentAPI(), deliveryAPI()];

  console.log("\\nPromise.all");
  try {
    console.log(await Promise.all(requests));
  } catch (error) {
    console.log(error.message);
  }

  console.log("\\nPromise.allSettled");
  console.log(await Promise.allSettled([
    productsAPI(),
    paymentAPI(),
    deliveryAPI()
  ]));

  console.log("\\nPromise.race");
  try {
    console.log(await Promise.race([
      productsAPI(),
      paymentAPI(),
      deliveryAPI()
    ]));
  } catch (error) {
    console.log(error.message);
  }

  console.log("\\nPromise.any");
  try {
    console.log(await Promise.any([
      productsAPI(),
      paymentAPI(),
      deliveryAPI()
    ]));
  } catch (error) {
    console.log(error.errors);
  }
}

async function runAllExamples() {
  runCallbackFlow();
  await runPromiseFlow();
  await placeOrder();
  await runPromiseCombinators();
}

runAllExamples();
