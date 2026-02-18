import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <h2>{error}</h2>;
  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="detail">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} loading="lazy" />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetail;
