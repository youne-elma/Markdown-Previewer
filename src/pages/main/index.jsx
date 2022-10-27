import { useState } from "react";
import Preview from "../components/Preview/index";
import "./main.scss";

function Main() {
  const [text, setText] = useState("");

  return (
    <div className="main">
      <h1 className="projectTitle">Markdown Previewer</h1>
      <div className="markdown">
        <div className="editorWrap">
          <div className="toolbar">
            <h4>Editor</h4>
          </div>
          <textarea
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="editor"
            id="editor"
            type="text"
          />
        </div>
        <Preview markdown={text} />
      </div>
    </div>
  );
}

export default Main;
