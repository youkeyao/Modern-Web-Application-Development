import styles from '../styles/Home.module.css'

import MusicPlayer from "../components/MusicPlayer/MusicPlayer"

export default function Home() {
  return (
    <div className={styles.container}>
      <MusicPlayer />
    </div>
  )
}
