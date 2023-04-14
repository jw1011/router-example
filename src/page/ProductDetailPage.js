import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  console.log("ppp", params);
  return (
    <div>
      <h1>Show Product Detail</h1>
    </div>
  );
};

export default ProductDetailPage;
