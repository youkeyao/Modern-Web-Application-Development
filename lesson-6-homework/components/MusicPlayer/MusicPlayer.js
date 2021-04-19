import style from "./MusicPlayer.module.css"

import MusicPlayerHeader from "../MusicPlayerHeader/MusicPlayerHeader"
import MusicPlayerList from "../MusicPlayerList/MusicPlayerList"
import MusicPlayerControl from "../MusicPlayerControl/MusicPlayerControl"
import { useState } from "react"

const songs = [
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000002DcojN33f7dm_1.jpg?max_age=2592000",
    name: "一念逍遥",
    singer: "任然",
    length: "03:36",
    url: "https://go-sycdn.kuwo.cn/55741cccc047ae180c3470f2a4e151cf/607f9833/resource/n3/79/69/2871212411.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000000ZqvDT2xiJHL_1.jpg?max_age=2592000",
    name: "我有所念人",
    singer: "韩潇",
    length: "03:22",
    url: "https://gr-sycdn.kuwo.cn/3a882091211c6fe800ad13f210405893/607f988d/resource/n3/49/88/4253844896.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000004Gd5Pg0y0QzT_1.jpg?max_age=2592000",
    name: "不觉秋色浅",
    singer: "以冬",
    length: "03:12",
    url: "https://go-sycdn.kuwo.cn/498b669e719744e77be6422f6597f4fb/607f98d9/resource/n1/49/15/1369306835.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M0000014mCUC3Az48c_1.jpg?max_age=2592000",
    name: "红梅妃",
    singer: "尹昔眠",
    length: "03:47",
    url: "https://gp-sycdn.kuwo.cn/d216e0575592a5ce42e2f7b09a1a1e2e/607f9918/resource/n2/44/97/2458243936.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000001NfN0z0lq6r1_1.jpg?max_age=2592000",
    name: "长安走马",
    singer: "伊格赛听",
    length: "02:52",
    url: "https://gu-sycdn.kuwo.cn/aa8ff48b2a979a060eca4d6ec12fc657/607f994c/resource/n3/68/20/2922342822.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000004PXqOL44exmd_1.jpg?max_age=2592000",
    name: "山河望断",
    singer: "吃肉肉不长肉",
    length: "03:39",
    url: "https://gs-sycdn.kuwo.cn/1c159b43d33a3e2b33003cd31c0194f2/607f9974/resource/n3/52/46/2964946075.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000004U7PXe3Flwsd_1.jpg?max_age=2592000",
    name: "静夜思温柔",
    singer: "张家锐",
    length: "04:27",
    url: "https://gd-sycdn.kuwo.cn/89f6b6b15debcf18c28fb1f571f6dce6/607f99a0/resource/n1/72/70/1722690672.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000004HK6fz3OgEJ8_1.jpg?max_age=2592000",
    name: "为我而来",
    singer: "徐磊",
    length: "02:56",
    url: "https://gh-sycdn.kuwo.cn/ba7f1b054566defc15983efc8200a9ea/607f99b6/resource/n2/36/90/2007989166.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M000003HQCiV10f8Bw_2.jpg?max_age=2592000",
    name: "天问",
    singer: "摩登兄弟刘宇宁",
    length: "03:41",
    url: "https://gr-sycdn.kuwo.cn/484fe758e2951550a839bb722466d6ae/607f99d8/resource/n1/35/41/1327377525.mp3"
  },
  {
    img: "//y.gtimg.cn/music/photo_new/T002R300x300M00000228tVT4XkWRV_2.jpg?max_age=2592000",
    name: "傆点",
    singer: "张家锐",
    length: "03:55",
    url: "https://gl-sycdn.kuwo.cn/61d9b6d24662826ccb2db8de0683902a/607f9a0e/resource/n3/7/17/2635016948.mp3"
  }
]

export default function MusicPlayer(props) {
  const [song, setSong] = useState(0);
  const [allPlay, setPlay] = useState(0);
  return (
    <div className={style.container}>
      <div className={style.main}>
        <MusicPlayerHeader song={songs[song]} allPlay={setPlay} songs={songs} remove={() => {setSong((old) => songs.length?(old+1)%(songs.length-1):0); songs.splice(song, 1);}} />
        <MusicPlayerList songs={songs} change={setSong} />
      </div>
      <MusicPlayerControl song={songs[song]} next={setSong} list={[song, songs.length]} play={allPlay} />
    </div>
  )
}