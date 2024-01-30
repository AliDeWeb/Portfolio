import "./Comments.css";
import React from "react";
import CommentsModal from "../Modals/CommentsModal";

import userImg1 from "../../assets/imgs/user-imgs/01.png";
import userImg2 from "../../assets/imgs/user-imgs/02.png";

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userComments: [
        {
          userImg: userImg1,
          userName: "محمد پناهی",
          userJob: " مدیر سایت",
          userComment:
            " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
        },
        {
          userImg: userImg2,
          userName: "مریم رستگار",
          userJob: " مدیر بازاریابی",
          userComment:
            " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
        },
      ],
    };
  }

  render() {
    return (
      <div className="comments-sec-wrapper">
        <div className="container">
          <p className="comments-section-des">دیدگاه مشتریان</p>
          <h2 className="comments-section-title">گفته مشتریان</h2>

          <div className="comments-section-comments-wrapper">
            <CommentsModal {...this.state.userComments[0]} />
            <CommentsModal {...this.state.userComments[1]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
