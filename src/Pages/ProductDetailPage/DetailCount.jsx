import proptype from "prop-types";

function DetailCount({ onclick, setItems, noItems }) {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <input
        type="number"
        min={0}
        value={noItems}
        onChange={(e) => setItems(Number(e.target.value))}
        className="focus:outline-none border-[2px] border-slate-200 w-[8rem] py-1.5 text-center rounded-full pr-3"
      />
      <button
        onClick={onclick}
        className="border-2 border-red-800 px-10 py-1.5 rounded-full hover:text-white hover:bg-red-800"
      >
        Add To Cart
      </button>
    </div>
  );
}

// prop validation

DetailCount.propTypes = {
  minOrder: proptype.number,
  onclick: proptype.func,
  setItems: proptype.func,
  noItems: proptype.number,
};

export default DetailCount;
