import style from "./AnswerContent.module.css"

export default function AnswerContent(props) {
  return (
    <div className={style.container}>
      <div className={style.authorBox}>
        <a className={style.author}>
          <img src={props.avatar}></img>
          <div>
            <p className={style.name}>{props.name}</p>
            <p className={style.info}>{props.info}</p>
          </div>
        </a>
        <button className={style.payAttention}>+ 关注</button>
      </div>
      <p className={style.info}>{props.agree} 人赞同了该回答</p>
      <div className={style.content} dangerouslySetInnerHTML={{ __html: props.content }} ></div>
      <p className={style.info}>编辑于 {props.time}&nbsp;·&nbsp;著作权归作者所有</p>
    </div>
  )
}