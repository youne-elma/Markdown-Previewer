import PropTypes from "prop-types";
import { marked } from "marked";
import "./preview.scss";

function Preview({ markdown }) {
  marked.setOptions({
    breaks: true,
  });
  const renderer = new marked.Renderer();
  return (
    <div className="previewerWrap">
      <div className="toolbar">
        <h4>Previewer</h4>
      </div>
      <div
        className="preview"
        id="preview"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer }),
        }}
      />
    </div>
  );
}
Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
