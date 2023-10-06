import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center py-5">
              <Link to={"/"}> Error! Page not found. Go menu</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
