import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError();
  console.log(error.data);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>Error 404 </p>
      <p>Sorry the page you are looking for does not exist</p>
    </div>
  );
}

export default PageNotFound;
