import style from "./AnswerTitle.module.css"

export default function AnswerTitle(props) {
  return (
    <div className={style.container}>
      <p className={style.title}>{props.title}</p>
      <div>
        <span className={style.info}>知乎</span>
        <span className={style.info}>&nbsp;·&nbsp;{props.answerNum} 个回答</span>
        <span className={style.info}>&nbsp;·&nbsp;{props.attention} 关注 &gt;</span>
      </div>
    </div>
  )
}