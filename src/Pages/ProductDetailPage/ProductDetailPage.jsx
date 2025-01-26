import { useParams } from "react-router-dom";
import { useFetch } from "../../Utils/FetchHook";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Detail from "./Detail";

function ProductDetailPage() {
  const productId = useParams().productId;
  const [data] = useFetch();
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

  return detail ? <Detail detail={detail} /> : <Loading />;
}
export default ProductDetailPage;
