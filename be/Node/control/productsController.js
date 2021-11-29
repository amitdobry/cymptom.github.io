const express = require("express");
const router = express.Router();
const products_bl = require("../bl/productsLogicLayer");

router.get("/:search", async (req, res) => {
  let searchedValue = req.params.search;
  console.log("searchedValue", searchedValue);
  const data = await products_bl.GetAllProducts(searchedValue);
  res.json(data);
});

module.exports = router;
