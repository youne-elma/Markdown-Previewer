import "./main.scss";

function Main() {
  return (
    <div className="main">
      <h1 className="projectTitle">Markdown Previewer</h1>
      <div className="markdown">
        <div className="editorWrap">
          <div className="toolbar">
            <h4>Editor</h4>
          </div>
          <textarea className="editor" id="editor" type="text">
            Test on This
          </textarea>
        </div>
        <div className="previewerWrap">
          <div className="toolbar">
            <h4>Previewer</h4>
          </div>
          <div className="preview" id="preview">
            Test
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
