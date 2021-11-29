const productsDal = require("../dal/productsDataLayer");

async function GetAllProducts(searchedValue) {
  const data = await productsDal.getProducts();
  const filtered = await data.filter((e) => {
    if (e.name !== null) {
      return e.name.includes(searchedValue);
    }
  });
  console.log("filtered", filtered[0]);
  let twentyResults = [];
  for (i = 0; i < 20; i++) {
    if (filtered[i] != null) twentyResults.push(filtered[i]);
  }

  return twentyResults;
}

module.exports = {
  GetAllProducts,
};
