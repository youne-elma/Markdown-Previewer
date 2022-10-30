import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/error/index";
import Main from "./pages/main/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="markdown-previewer/"
          exact
          element={
            <div id="wrapper" className="main">
              <Main />
            </div>
          }
        />
        <Route path="markdown-previewer/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
