import { useParams } from "react-router-dom";
import { useFetch } from "../../Utils/fetchHook";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Detail from "./Detail";
import ProductError from "../ProductPage/ProductError";

function ProductDetailPage() {
  const productId = useParams().productId;
  const [data, error] = useFetch();
  const [detail, setDetail] = useState(null);

  useEffect(
    function () {
      if (data) {
        const categoryDetail = data.find((el) => el.id == productId);
        setDetail(categoryDetail);
      }
    },
    [data, productId]
  );
  if (error) {
    return <ProductError error={error} />;
  }
  return detail ? <Detail detail={detail} /> : <Loading />;
}
export default ProductDetailPage;
