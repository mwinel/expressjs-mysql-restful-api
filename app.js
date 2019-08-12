import express from "express";
import bodyparser from "body-parser";
import cors from "cors";

import products from "./api/products";

// Create express app.
const app = express();

// Enable CORS
app.use(cors());

// Parse data into JSON format.
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// Add api routes.
app.use("/products", products);

// Catch 404 and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      code: err.status || 500,
      message: err.message
    }
  });
});

module.exports = app;
