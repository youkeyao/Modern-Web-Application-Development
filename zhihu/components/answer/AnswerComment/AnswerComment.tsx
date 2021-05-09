import style from "./AnswerComment.module.css"

export default function AnswerComment(props) {
  return (
    <div className={style.container}>
      <p className={style.totalComment}>评论 {props.comment}</p>
      <div className={style.commentBox}>
        <img className={style.avatar} src="https://pic4.zhimg.com/aadd7b895_xs.jpg?source=1940ef5c"></img>
        <input className={style.myComment} placeholder="写下你的评论..."></input>
      </div>
      <div className={style.commentBox}>
        <img className={style.avatar} src={props.commenter1["avatar"]}></img>
        <div>
          <div className={style.commenter}>
            <span className={style.name}>{props.commenter1["name"]}</span>
            <span className={style.level}>Lv{props.commenter1["level"]}</span>
          </div>
          <div className={style.content}>{props.commenter1["content"]}</div>
          <div className={style.commentFooter}>
            <span className={style.info}>{props.commenter1["time"]}</span>
            <div>
              <a className={style.commentIcon} href="#"></a>
              <a className={style.goodIcon} href="#"></a>
              <span className={style.info}>{props.commenter1["good"]}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.commentBox}>
        <img className={style.avatar} src={props.commenter2["avatar"]}></img>
        <div>
          <div className={style.commenter}>
            <span className={style.name}>{props.commenter2["name"]}</span>
            <span className={style.level}>Lv{props.commenter2["level"]}</span>
          </div>
          <div className={style.content}>{props.commenter2["content"]}</div>
          <div className={style.commentFooter}>
            <span className={style.info}>{props.commenter2["time"]}</span>
            <div>
              <a className={style.commentIcon} href="#"></a>
              <a className={style.goodIcon} href="#"></a>
              <span className={style.info}>{props.commenter2["good"]}</span>
            </div>
          </div>
        </div>
      </div>
      <p className={style.info}>查看全部评论 &gt;</p>
    </div>
  )
}