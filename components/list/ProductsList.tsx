import { IProducts } from "@/interfaces";
import React from "react";
import ProductsCard from "../cards/ProductsCard";
interface Iprops {
  products: IProducts[];
}
const ProductsList = ({ products }: Iprops) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-12 rounded-md">
      {products.length > 0 ? (
        products.map((products) => (
          <ProductsCard key={products.id} products={products} />
        ))
      ) : (
        <h1>No Categories Widgets Available</h1>
      )}
    </div>
  );
};

export default ProductsList;
