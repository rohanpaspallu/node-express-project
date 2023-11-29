const express = require("express");
const { products, people } = require("./data");
const app = express();

//SSR
const showEachItem = (product) => {
  return `<div>
    <h1>Product Name: ${product.name}</h1>
    <img src='${product.image}' />
    <h2>Price: $${product.price}</h2>
    <p><strong>Description</strong> ${product.desc}</p>
  </div>`;
};

app.get("/", (req, res) => {
  res.send("<h1>Hope page</h1><a href='/api/products'>Go to product list</a>");
  // res.json(products);
});

//Get a list of all the products
app.get("/api/products", (req, res) => {
  const test = products.map((product) => showEachItem(product));

  console.log("value of test is :", test);
  const newProducts = products.map((product) => {
    return { id: product.id, name: product.name, image: product.image };
  });
  res.json(newProducts);
  // res.send(test.toString());
  // res.send("<h1>Products page</h1>");
});

//Get only one product with id
app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  const findProduct = products.find((item) => item.id == req.params.id);
  console.log(findProduct);
  findProduct
    ? res.send(findProduct)
    : res.status(404).send("Product Doesnt Exist");
});

app.get("/api/productsNew/query", (req, res) => {
  console.log("params in query string : ", req.query);
  const { name, id } = req.query;
  let sortedPeople = [...people];

  if (name) sortedPeople = sortedPeople.filter((i) => i.name.startsWith(name));

  // if (id) sortedPeople = sortedPeople.filter((i) => i.id == id);
  // res.json(sortedPeople);

  sortedPeople.length < 1
    ? res.status(200).send("<h2>Unfortunately the person doesn't exist</h2>")
    : res.status(200).json({ success: true, data: sortedPeople });
});

app.listen(5000, () => {
  console.log("server is listening on 5000....");
});
