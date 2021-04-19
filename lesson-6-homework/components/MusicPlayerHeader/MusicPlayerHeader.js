import { useRef, useState } from "react"
import style from "./MusicPlayerHeader.module.css"

export default function MusicPlayerHeader(props) {
  const [isInput, setInput] = useState("none");
  const name = useRef();
  const singer = useRef();
  const length = useRef();
  const img = useRef();
  const url = useRef();
  return (
    <div className={style.container}>
      <img src={props.song?props.song.img:"//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"}></img>
      <div className={style.right}>
        <div className={style.songInfo}>
          <p className={style.title}>{props.song?props.song.name:""}</p>
          <p className={style.singer}>{props.song?props.song.singer:""}</p>
        </div>
        <div className={style.funcBtn}>
          <a className={style.play} onClick={() => props.allPlay((old) => old+1)}></a>
          <a className={style.add} onClick={() => setInput("block")}></a>
          <a className={style.remove} onClick={props.remove}></a>
        </div>
      </div>
      <div className={style.addInput} style={{display: isInput}}>
        <div className={style.inputBox}>
          <div className={style.inputItem}><span>歌名</span><input ref={name}></input></div>
          <div className={style.inputItem}><span>歌手</span><input ref={singer}></input></div>
          <div className={style.inputItem}><span>时长</span><input ref={length}></input></div>
          <div className={style.inputItem}><span>图片地址</span><input ref={img}></input></div>
          <div className={style.inputItem}><span>歌曲地址</span><input ref={url}></input></div>
          <button onClick={() => {props.songs.push({img: img.current.value, name: name.current.value, singer: singer.current.value, length: length.current.value, url: url.current.value}); setInput("none")}}>确认</button>
          <div className={style.close} onClick={() => setInput("none")}></div>
        </div>
      </div>
    </div>
  )
}