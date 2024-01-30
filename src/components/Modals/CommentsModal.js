import "./CommentsModal.css";
import defaultUserImg from "../../assets/imgs/user-imgs/default-user-img.jpg";

function CommentsModal({
  userImg = defaultUserImg,
  userName,
  userJob,
  userComment,
}) {
  return (
    <div className="comments-modal-wrapper">
      <div className="comments-modal-infos-wrapper">
        <div className="comments-modal-img-wrapper">
          <img src={userImg} alt="img" />
        </div>
        <div className="comments-modal-user-info">
          <span className="comments-modal-user-name">{userName},</span>
          <span className="comments-modal-user-job">{userJob}</span>
        </div>
      </div>
      <p className="comments-modal-comment">"{userComment}"</p>
    </div>
  );
}

export default CommentsModal;
