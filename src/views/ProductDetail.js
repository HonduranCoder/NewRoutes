import { useParams } from 'react-router-dom';

function ProductDetail() {
  const params = useParams();
  //params.productId;

  return (
    <>
      <h2>Product Detail</h2>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetail;
