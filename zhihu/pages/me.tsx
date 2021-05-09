import style from "../styles/me.module.css"

import Footer from "../components/Footer/Footer"
import MeHeader from "../components/me/MeHeader/MeHeader"
import SelfBox from "../components/me/SelfBox/SelfBox"
import CardBox from "../components/me/CardBox/CardBox"

export default function answer(props) {
  const id = props.data;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <MeHeader />
      </div>
      <div className={style.main}>
        <SelfBox />
        <CardBox />
      </div>
      <div className={style.footer}>
        <Footer page="me" />
      </div>
    </div>
  )
}