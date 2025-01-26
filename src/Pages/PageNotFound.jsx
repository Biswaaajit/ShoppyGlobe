import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.data}</h1>
      <p>Sorry you donot exist</p>
    </div>
  );
}

export default PageNotFound;
