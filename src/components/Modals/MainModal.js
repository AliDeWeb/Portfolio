import "./MainModal.css";

function MainModal(props) {
  return (
    <div className="main-modal-wrapper">
      <div className="main-modal-icon-wrapper">{props.children}</div>

      <div className="main-modal-content-wrapper">
        <h3>{props.title}</h3>
        <p>{props.des}</p>
      </div>
    </div>
  );
}

export default MainModal;
