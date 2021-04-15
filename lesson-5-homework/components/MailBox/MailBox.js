import style from "./MailBox.module.css"

function MailBox(props) {
  return (
    <div className={style.page}>
      <div className={style.popup}>
        <div className={style.banner}></div>
        <p>已加载好您感兴趣的头条</p>
        <div className={style.download}>立即打开</div>
        <div className={style.close} onClick={props.onclick}></div>
      </div>
    </div>
  )
}

export default MailBox