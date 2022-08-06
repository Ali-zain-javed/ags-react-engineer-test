export const filterProduct = (query, products) => {
  let checkStructure = query.includes("-");
  if (checkStructure) {
    return findProductFromStructure(query, products);
  } else {
    return findProductFromUnStructure(query, products);
  }
};

///return products from structure
const findProductFromStructure = (query, products) => {
  let findProducts = products
    .filter(
      (product) =>
        product.sku.toLowerCase().includes(query.toLowerCase()) !== -1
    )
    .map((finalResult) => {
      return {
        ...finalResult,
        percentage: similar(finalResult.sku, query),
      };
    })
    .sort((a, b) =>
      a.percentage > b.percentage ? -1 : a.percentage < b.percentage ? 1 : 0
    );

  if (findProducts && findProducts.length > 0) {
    return { product: findProducts, type: "2" };
  } else {
    return { product: findUnmatched(products), type: "3" };
  }
};

///return products from unstructrue
const findProductFromUnStructure = (query, products) => {
  let values = products.filter((item) => {
    const check = Object.keys(item).some((key, value) => {
      return (
        String(item[key]).toLowerCase().includes(query.toLowerCase()) !== false
      );
    });

    if (check) {
      return true;
    } else {
      return false;
    }
  });

  if (values && values.length > 0) {
    return { product: values, type: "1" };
  } else {
    return { product: findUnmatched(products), type: "3" };
  }
};

////when no match item found then most serach items will return
const findUnmatched = (products = []) => {
  return [...products].sort((a, b) =>
    a.searchCount > b.searchCount ? -1 : a.searchCount < b.searchCount ? 1 : 0
  );
};

function similar(a, b) {
  var equivalency = 0;
  var minLength = a.length > b.length ? b.length : a.length;
  var maxLength = a.length < b.length ? b.length : a.length;
  for (var i = 0; i < minLength; i++) {
    if (a[i] == b[i]) {
      equivalency++;
    }
  }

  var weight = equivalency / maxLength;
  return Math.floor(weight * 100);
}
