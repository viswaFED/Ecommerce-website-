import React, { Fragment } from "react";
import { useParams } from "react-router-dom";


const ProductPage = (props) => {
  const params = useParams();

  return (
    <Fragment>
      <h3>product details</h3>
      <p>{params.productId}</p>
    </Fragment>
  );
};

export default ProductPage;
