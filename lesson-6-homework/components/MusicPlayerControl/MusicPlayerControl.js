import { useEffect, useRef, useState } from "react"
import style from "./MusicPlayerControl.module.css"

export default function MusicPlayerControl(props) {
  const playOrder = [style.inOrder, style.randomOrder];
  const playPause = [style.play, style.pause];
  const [curOrder, setOrder] = useState(0);
  const [curPlay, setPlay] = useState(0);
  const [isLike, setLike] = useState(100);
  const [dragging, setDrag] = useState(0);
  const [curMusic, setMusic] = useState(0);
  const [curVoice, setVoice] = useState(0);
  const music = useRef();
  const musicProgress = useRef();
  const voiceProgress = useRef();

  const clickPlay = () => {
    if (curPlay == 0) {
      music.current.play();
    }
    else {
      music.current.pause();
    }
    setPlay((old) => (old+1)%2);
  };

  const prevMusic = () => {
    if (curOrder) {
      props.next((props.list[0] + props.list[1] - 1) % props.list[1]);
    }
    else {
      props.next((props.list[0] + parseInt((props.list[1] - 1) * Math.random()) + 1) % props.list[1]);
    }
  };

  const nextMusic = () => {
    if (curOrder) {
      props.next((props.list[0] + 1) % props.list[1]);
    }
    else {
      props.next((props.list[0] + parseInt((props.list[1] - 1) * Math.random()) + 1) % props.list[1]);
    }
  };

  const clickMusic = (e) => {
    const time = (e.clientX - musicProgress.current.offsetLeft) / musicProgress.current.offsetWidth;
    setMusic(100 * time);
    if (props.song) music.current.currentTime = music.current.duration * time
  };

  const clickVoice = (e) => {
    const volume = (e.clientX - voiceProgress.current.offsetLeft) / voiceProgress.current.offsetWidth;
    setVoice(100 * volume);
    if (props.song) music.current.volume = volume;
  };

  const musicMouseDown = () => {
    music.current.pause();
    setDrag(1);
    setPlay(0);
  };

  useEffect(() => {
    document.onmouseup = () => {
      if (dragging) {
        setDrag(0);
      }
    };
    document.onmousemove = (e) => {
      if (dragging == 1) {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        let toMove = 100 * (e.clientX - musicProgress.current.offsetLeft) / musicProgress.current.offsetWidth;
        if (toMove < 0) {
          toMove = 0;
        }
        else if (toMove > 100) {
          toMove = 100;
        }
        if (props.song) music.current.currentTime = toMove * music.current.duration / 100;
        setMusic(toMove);
      }
      else if (dragging == 2) {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        let toMove = 100 * (e.clientX - voiceProgress.current.offsetLeft) / voiceProgress.current.offsetWidth;
        if (toMove < 0) {
          toMove = 0;
        }
        else if (toMove > 100) {
          toMove = 100;
        }
        if (props.song) music.current.volume = toMove / 100;
        setVoice(toMove);
      }
    }
  }, [dragging]);

  useEffect(() => {
    if (curPlay == 1) {
      music.current.play();
    }
    else {
      music.current.pause();
    }
    music.current.volume = curVoice / 100;
    setMusic(0);
  }, [props.song]);

  useEffect(() => {
    if (props.play) {
      music.current.play();
      music.current.currentTime = 0;
      setPlay(1);
      setMusic(0);
    }
  }, [props.play]);

  useEffect(() => {
    setVoice(100);
    music.current.volume = 1;
  }, []);

  return (
    <div className={style.container}>
      <div className={style.controlBtn}>
        <a className={style.like} onClick={() => setLike((old) => 1000-old)} style={{fontWeight: isLike}}></a>
        <a className={style.prev} onClick={prevMusic}></a>
        <a className={playPause[curPlay]} onClick={clickPlay}></a>
        <a className={style.next} onClick={nextMusic}></a>
        <a className={playOrder[curOrder]} onClick={() => setOrder((old) => (old+1)%2)}></a>
      </div>
      <div className={style.musicBar}>
        <audio src={props.song?props.song.url:""} ref={music} onTimeUpdate={() => setMusic(100*music.current.currentTime/music.current.duration)} onEnded={nextMusic}></audio>
        <div className={style.progressBar} ref={musicProgress} onClick={clickMusic}>
          <div className={style.allBar}></div>
          <div className={style.currentBar} style={{width: curMusic + "%"}}></div>
          <div className={style.dot} onMouseDown={musicMouseDown} style={musicProgress.current?{transform: "translateX(" + curMusic*musicProgress.current.offsetWidth/100 + "px)"}:{}}></div>
        </div>
      </div>
      <div className={style.voiceBar}>
        <a className={style.voice}></a>
        <div className={style.progressBar} ref={voiceProgress} onClick={clickVoice}>
          <div className={style.allBar}></div>
          <div className={style.currentBar} style={{width: curVoice + "%"}}></div>
          <div className={style.dot} onMouseDown={() => setDrag(2)} style={voiceProgress.current?{transform: "translateX(" + curVoice*voiceProgress.current.offsetWidth/100 + "px)"}:{}}></div>
        </div>
      </div>
    </div>
  )
}