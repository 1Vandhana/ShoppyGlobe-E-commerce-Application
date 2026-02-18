// ProductList page 
// Display list of products and filter them based on search value from Redux //

//import useProducts from "../hooks/useProducts";
//import ProductItem from "../components/ProductItem";
//import { useSelector } from "react-redux";

// Shows an error message if product fetching fails //

//function ProductList() {
 // const { products, error } = useProducts();
 // const search = useSelector(state => state.search);

 

import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
  const { products, error } = useProducts();
  const search = useSelector(state => state.search);

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <h2>{error}</h2>;

  return (
    <div className="grid">
      {filtered.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
