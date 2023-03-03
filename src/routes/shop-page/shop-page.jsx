import { useContext } from "react";

import { ProductContext } from "../../contexts/product-context";
import ProductCard from "../../components/product-card/product-card";

import "./shop-page.scss";

const ShopPage = () => {
  // use products context
  const { products } = useContext(ProductContext);

  return (
    <div className="ShopPage">
      <div className="products_container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
