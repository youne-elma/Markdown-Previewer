import "./error.scss";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-main">
      <h1 className="errorTitle">Error 404</h1>
      <Link to="/Markdown-Previewer/" className="goBackButton">
        Go Back
      </Link>
      <h4 className="authorErrorPage">Markdown Previewer made by Younelma</h4>
    </div>
  );
}

export default ErrorPage;
