import { useEffect, useState } from "react"
import style from "./IndexHeader.module.css"

export default function IndexHeader(props) {
  const [feedsNum, setFeedsNum] = useState(1);

  useEffect(() => {
    props.main.current.style.transform = "translateX(-"+(100/14)*feedsNum+"%)";
    props.setFeeds(feedsNum);
  }, [feedsNum]);

  useEffect(() => {
    setFeedsNum(props.feeds);
  }, [props.feeds])

  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <a className={style.live} href="#"><img src="/IndexIcon/live.jpg" ></img></a>
        <div className={style.searchBox}>
          <div className={style.searchIcon}></div>
          <input className={style.searchInput} placeholder="这里会有些热搜显示"></input>
        </div>
        <div className={style.more}></div>
      </div>
      <div>
        <div className={style.menuRight}>
          <div className={style.shadow}></div>
          <a className={style.rightBtn} href="#">
            <div className={style.rightIcon}></div>
          </a>
        </div>
        <div className={style.menuList}>
          <a href="#" className={feedsNum == 0 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(0)} >关注</a>
          <a href="#" className={feedsNum == 1 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(1)} >推荐</a>
          <a href="#" className={feedsNum == 2 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(2)} >热榜</a>
          <a href="#" className={feedsNum == 3 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(3)} >动漫</a>
          <a href="#" className={feedsNum == 4 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(4)} >知识</a>
          <a href="#" className={feedsNum == 5 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(5)} >校园</a>
          <a href="#" className={feedsNum == 6 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(6)} >考研</a>
          <a href="#" className={feedsNum == 7 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(7)} >美食</a>
          <a href="#" className={feedsNum == 8 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(8)} >职场</a>
          <a href="#" className={feedsNum == 9 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(9)} >数码</a>
          <a href="#" className={feedsNum == 10 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(10)} >心理</a>
          <a href="#" className={feedsNum == 11 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(11)} >科学</a>
          <a href="#" className={feedsNum == 12 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(12)} >影视</a>
          <a href="#" className={feedsNum == 13 ? style.select : style.menuBtn} onClick={(e) => setFeedsNum(13)} >娱乐</a>
          <div className={style.selectBorder} style={{transform: "translateX("+(21+52*feedsNum)+"px)"}}></div>
        </div>
      </div>
    </div>
  )
}