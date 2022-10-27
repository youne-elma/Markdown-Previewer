import PropTypes from "prop-types";
import "./preview.scss";

function Preview({ markdown }) {
  return (
    <div className="previewerWrap">
      <div className="toolbar">
        <h4>Previewer</h4>
      </div>
      <div className="preview" id="preview">
        {markdown}
      </div>
    </div>
  );
}
Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
