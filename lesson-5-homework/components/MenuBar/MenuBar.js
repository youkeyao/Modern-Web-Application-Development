import style from "./MenuBar.module.css"

function MenuBar() {
  return (
    <div className={style.MenuBar}>
      <div className={style.more}>
        <div className={style.shadow}></div>
        <a className={style.moreBtn} href="">
          <span className={style.cross}></span>
        </a>
      </div>
      <div className={style.menuList}>
        <a href="" className={style.select}>推荐</a>
        <a href="" className={style.menuBtn}>视频</a>
        <a href="" className={style.menuBtn}>热点</a>
        <a href="" className={style.menuBtn}>社会</a>
        <a href="" className={style.menuBtn}>娱乐</a>
        <a href="" className={style.menuBtn}>军事</a>
        <a href="" className={style.menuBtn}>科技</a>
        <a href="" className={style.menuBtn}>汽车</a>
        <a href="" className={style.menuBtn}>房产</a>
        <a href="" className={style.menuBtn}>家居</a>
        <a href="" className={style.menuBtn}>体育</a>
        <a href="" className={style.menuBtn}>财经</a>
      </div>
    </div>
  )
}

export default MenuBar