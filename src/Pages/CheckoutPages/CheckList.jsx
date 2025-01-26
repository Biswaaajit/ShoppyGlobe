import proptype from "prop-types";

function CheckList({ item }) {
  return (
    <div className="flex gap-2 w-full items-center justify-between py-4 border-b-2 border-slate-200">
      <div className=" flex flex-nowrap text-sm gap-3">
        <p>{item.title}</p>
        <p>x</p>
        <p>{item.item}</p>
      </div>
      <p className="font-semibold">$ {item.totalPrice}</p>
    </div>
  );
}

//prop validation
CheckList.propTypes = {
  item: proptype.object,
};

export default CheckList;
