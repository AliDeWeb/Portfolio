import "./ProgressBar.css";

function ProgressBar(props) {
  return (
    <div className="progress-wrapper">
      <label className="progress-label">{props.title}: </label>
      <progress className="progress-tag" max="100" value={props.value}></progress>
    </div>
  );
}

export default ProgressBar;
