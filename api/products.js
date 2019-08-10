import express from "express";

const router = express.Router();

/*
GET /products
handles fetch products.
*/
router.get("/", (req, res, next) => {
  res.json("Here is the products GET request.");
});

/*
POST /products
handles creating a product.
*/
router.post("/", (req, res, next) => {
  res.json("Here is the products POST request.");
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
