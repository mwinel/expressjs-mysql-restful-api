import express from "express";
import db from "../db/database";
import Product from "../domain/Product";

const router = express.Router();

/*
GET /products
handles fetch products.
*/
router.get("/", (req, res) => {
  db.query(Product.getAllProductSQL(), (err, products) => {
    if (!err) {
      res.status(200).json({
        products: products
      });
    }
  });
});

/*
POST /products
handles creating a product.
*/
router.post("/", (req, res) => {
  let product = new Product(req.body.prd_name, req.body.prd_price);
  db.query(product.getAddProductSQL(), (err, product) => {
    res.status(201).json({
      message: "Product successfully added.",
      productId: product.insertId
    });
  });
});

/*
PUT /products/:id
handles updating a product given its ID.
*/
router.put("/:id", (req, res, next) => {
  res.json("Here is the PUT request for a product.");
});

/*
DELETE /products/:id
handles deletind a product given its ID.
*/
router.delete("/:id", (req, res, next) => {
  res.json("Here is the DELETE request for a product.");
});

module.exports = router;
