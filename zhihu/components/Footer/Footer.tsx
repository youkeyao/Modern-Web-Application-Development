import style from "./Footer.module.css"

import Link from "next/link"

export default function Footer(props) {
  return (
    <div className={style.container}>
      <Link href="/"><a className={style.pageBtn} href="#"><img src={props.page=="home"?"/FooterIcon/home_select.jpg":"/FooterIcon/home.jpg"}></img><span>首页</span></a></Link>
      <a className={style.pageBtn} href="#"><img src={props.page=="video"?"/FooterIcon/video_select.jpg":"/FooterIcon/video.jpg"}></img><span>视频</span></a>
      <a className={style.pageBtn} href="#"><img src={props.page=="crown"?"/FooterIcon/crown_select.jpg":"/FooterIcon/crown.jpg"}></img><span>会员</span></a>
      <a className={style.pageBtn} href="#"><img src={props.page=="bell"?"/FooterIcon/bell_select.jpg":"/FooterIcon/bell.jpg"}></img><span>消息</span></a>
      <Link href="/me"><a className={style.pageBtn} href="#"><img src={props.page=="me"?"/FooterIcon/me_select.jpg":"/FooterIcon/me.jpg"}></img><span>我的</span></a></Link>
    </div>
  )
}