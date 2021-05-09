import style from "./AnswerHeader.module.css"
import Link from "next/link"

export default function AnswerHeader(props) {
  return (
    <div className={style.container}>
      <Link href="/"><a className={style.back}></a></Link>
      <div className={style.headerRight}>
        <a className={style.invite} href="#">邀请</a>
        <a className={style.write} href="#">写回答</a>
        <a className={style.more} href="#"></a>
      </div>
    </div>
  )
}