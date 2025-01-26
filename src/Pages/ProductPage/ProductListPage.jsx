import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loading from "../../components/Loading";
import { useFetch } from "../../Utils/fetchHook";
import ProductError from "./ProductError";

function ProductListPage() {
  const [data, isLoading, error] = useFetch();
  const [list, setList] = useState([]);
  useEffect(
    function () {
      if (data) {
        setList(data);
      }
    },
    [data]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ProductError error={error} />;
  }

  return <ProductList lists={list} />;
}

export default ProductListPage;
