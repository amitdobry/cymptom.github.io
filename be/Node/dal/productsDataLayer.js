const data_from_data_base = require("../../../assets/products.json");

async function getProducts() {
  try {
    const data = data_from_data_base;
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  getProducts,
};
