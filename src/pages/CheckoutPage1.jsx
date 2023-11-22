import { useParams } from "react-router-dom";

function CheckoutPage1() {
  const { id } = useParams();
  return (
    <div>
      <h1>This is checkout page for tour ID: {id}</h1>
    </div>
  );
}

export default CheckoutPage1;
