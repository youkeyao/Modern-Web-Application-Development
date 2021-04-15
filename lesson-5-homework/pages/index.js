import styles from '../styles/Home.module.css'

import TopBar from "../components/TopBar/TopBar"
import MenuBar from "../components/MenuBar/MenuBar"
import NewsContainer from "../components/NewsContainer/NewsContainer"
import BottomBar from '../components/BottomBar/BottomBar'
import MailBox from "../components/MailBox/MailBox"

import { useRef } from 'react'

export default function Home() {
  const mailRef = useRef();
  return (
    <div className={styles.Home}>
      <header>
        <TopBar onclick={() => {mailRef.current.style.display = 'block';}}/>
      </header>
      <main>
        <MenuBar />
        <NewsContainer />
        <BottomBar className={styles.bottom} />
        <div ref={mailRef} style={{display: 'none'}}>
          <MailBox onclick={() => {mailRef.current.style.display = 'none';}} />
        </div>
      </main>
    </div>
  )
}
