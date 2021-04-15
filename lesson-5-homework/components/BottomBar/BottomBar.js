import style from "./BottomBar.module.css"

function BottomBar(props) {
  return (
    <div className={style.BottomBar}>
      <a href="//d.toutiao.com/N13p/" target="_self" className={style.download} rel="nofollow">  
        <div className={style.logoWrapper}>
          <div className={style.logo}></div>
          <div>
            <p className={style.name}>今日头条</p>
          </div>
        </div>
        <div className={style.open}>打开</div> 
      </a>
    </div>
  )
}

export default BottomBar