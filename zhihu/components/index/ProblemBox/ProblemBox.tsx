import style from "./ProblemBox.module.css"

import Link from 'next/link'

function bigNum(num: number) {
  if (num > 10000) {
      num = parseInt((num / 10000).toString());
      return num.toString() + " 万";
  }
  else {
      return num.toString() + " ";
  }
}

export default function ProblemBox(props) {
  const id = props.data["id"];
  return (
    <Link href={"/"+id}>
    <a className={style.container}>
      <p className={style.title}>{props.data["title"]}</p>
      <div className={style.main}>
        <div className={style.text}>
          <div className={style.author}>
            <img className={style.avatar} src={props.data["avatar"]}></img>
            <span className={style.name}>{props.data["name"]}</span>
            <span className={style.info}>{props.data["info"]}</span>
          </div>
          {props.data["video"]?
          <div className={style.video}>
            <img src={props.data["video"]}></img>
          </div>
          :""}
          <div className={style.content}>{props.data["content"]}</div>
        </div>
        {props.data["img"]?
        <div className={style.img}>
          <img src={props.data["img"]}></img>
        </div>
        :""}
      </div>
      <div className={style.footer}>
        <div>
          <span>{bigNum(props.data["agree"])}赞同</span>
          <span>&nbsp;·&nbsp;{bigNum(props.data["comment"])}评论</span>
        </div>
        <div className={style.more}></div>
      </div>
    </a>
    </Link>
  )
}