import style from "./TopBar.module.css"

function TopBar(props) {
  return (
    <div className={style.TopBar}>
      <div className={style.middle}>
        <a href="#" className={style.title}></a>
        <div className={style.refreshContainer}>
          <i className={style.refreshBtn}></i>
        </div>
      </div>
      <div className={style.left} onClick={props.onclick}>
        <a href="" className={style.messageBox} onClick={(e) => {e.preventDefault();}}></a>
      </div>
      <div className={style.right}>
        <a href="https://so.toutiao.com/?need_open_window=1" className={style.search}></a>
      </div>
    </div>
  )
}

export default TopBar