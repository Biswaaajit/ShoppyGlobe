import proptype from "prop-types";

function AdditionalInfo({ detail }) {
  const {
    brand,
    stock,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
  } = detail;
  return (
    <div>
      <div className="w-full sm:w-[80vw] md:w-[70%] lg:w-[60%]  space-y-2">
        <Info name="Brand" value={brand ? brand : "No Information"} />
        <Info
          name="Shipping"
          value={shippingInformation ? shippingInformation : "No Information"}
        />
        <Info name="In stock" value={`${stock} items`} />
        <Info
          name="Warranty"
          value={warrantyInformation ? warrantyInformation : "No Information"}
        />
        <Info
          name="Return Info"
          value={returnPolicy ? returnPolicy : "No Information"}
        />
      </div>
    </div>
  );
}

function Info({ name, value }) {
  return (
    <div className="grid grid-cols-2">
      <p className="text-slate-600 md:text-lg">{name}</p>
      <p className="font-semibold md:text-lg">{value}</p>
    </div>
  );
}

//Prop validation
AdditionalInfo.propTypes = {
  detail: proptype.object,
};
Info.propTypes = {
  name: proptype.string,
  value: proptype.any,
};

export default AdditionalInfo;
