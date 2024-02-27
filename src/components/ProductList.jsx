/*mport React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products} />
}

export default ProductList
*/
import React from "react";
import Card from "./card"; // Make sure to provide the correct path to your Card component
import { data } from "../utils/data";

const ProductList = () => {
  return (
    <div>
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
