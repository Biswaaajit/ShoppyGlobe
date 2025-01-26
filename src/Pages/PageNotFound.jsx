import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>Error 404 </p>
      <p>Sorry the page you are looking for does not exist</p>
      <button
        onClick={() => navigate("/")}
        className="bg-slate-200 px-6 py-1.5 rounded-lg mt-5 hover:text-white hover:bg-black"
      >
        Back to homepage
      </button>
    </div>
  );
}

export default PageNotFound;
