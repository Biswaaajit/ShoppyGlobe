import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Utils/fetchHook";
import Loading from "../components/Loading";
import ProductList from "./ProductPage/ProductList";

function CategoryPage() {
  const category = useParams().category;
  const [data, isLoading] = useFetch();
  const [list, setList] = useState([]);
  useEffect(
    function () {
      if (data) {
        const newData = data.filter((item) => item.category === category);
        setList(newData);
      }
    },
    [data, category]
  );

  return isLoading ? <Loading /> : <ProductList lists={list} />;
}

export default CategoryPage;
