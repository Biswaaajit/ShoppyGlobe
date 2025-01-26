import proptype from "prop-types";
import DetailImage from "./DetailImage";
import DetailInfo from "./DetailInfo";
import DetailDescription from "./DetailDescription";

function Detail({ detail }) {
  return (
    <div className="pt-20 lg:pt-0 w-full pb-10 flex flex-col ">
      <div className="w-[90%] lg:w-[85%]  h-fit lg:h-screen self-center flex flex-col justify-start  items-start lg:flex-row    lg:items-center gap-4 lg:gap-14 xl:gap-16">
        <DetailImage images={detail.images} />
        <DetailInfo detail={detail} />
      </div>
      <DetailDescription detail={detail} />
    </div>
  );
}

//prop validation

Detail.propTypes = {
  detail: proptype.any,
};

export default Detail;
