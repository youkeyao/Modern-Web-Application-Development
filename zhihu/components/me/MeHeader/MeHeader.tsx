import style from "./MeHeader.module.css"

export default function MeHeader(props) {
  return (
    <div className={style.container}>
      <a className={style.iconBtn} href="#"><img src="/MeIcon/scan.jpg"></img></a>
      <div className={style.searchBox}>
        <div className={style.searchIcon}></div>
        <input className={style.searchInput} placeholder="搜索知乎内容"></input>
      </div>
      <div className={style.headerRight}>
        <a className={style.iconBtn} href="#"><img src="/MeIcon/night.jpg"></img></a>
        <a className={style.iconBtn} href="#"><img src="/MeIcon/setting.jpg"></img></a>
      </div>
    </div>
  )
}