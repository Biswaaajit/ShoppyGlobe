import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loading from "../../components/Loading";
import { useFetch } from "../../Utils/fetchHook";

function ProductListPage() {
  const [data, isLoading] = useFetch();
  const [list, setList] = useState([]);
  useEffect(
    function () {
      if (data) {
        setList(data);
      }
    },
    [data]
  );

  return isLoading ? <Loading /> : <ProductList lists={list} />;
}

export default ProductListPage;
