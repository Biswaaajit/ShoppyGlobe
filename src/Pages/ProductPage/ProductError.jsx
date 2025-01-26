import proptype from "prop-types";
function ProductError({ error }) {
  return (
    <div className="h-screen flex  items-center justify-center">
      <p className="text-lg md:text-6xl">{error}</p>
    </div>
  );
}

//prop validation
ProductError.propTypes = {
  error: proptype.any,
};

export default ProductError;
