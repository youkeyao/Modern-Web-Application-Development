import style from "./AnswerFooter.module.css"

export default function AnswerFooter(props) {
  return (
    <div className={style.container}>
      <div className={style.agreeContainer}>
        <a className={style.agree} href="#">赞同 {props.agree}</a>
        <a className={style.disagree} href="#"></a>
      </div>
      <div className={style.buttonContainer}>
        <a className={style.like} href="#">{props.like}</a>
        <a className={style.star} href="#">{props.star}</a>
        <a className={style.comment} href="#">{props.comment}</a>
      </div>
    </div>
  )
}