import style from "./MusicPlayerList.module.css"

import { useEffect, useRef, useState } from 'react'

export default function MusicPlayerList(props) {
  const [scrollOpacity, setOpacity] = useState(0);
  const [scrollY, setY] = useState(0);
  const [dragging, setDrag] = useState(0);
  const [touchPos, setTouch] = useState(0);
  const [animation, setAnim] = useState("all 0.3s")
  const list = useRef();
  const scrollCur = useRef();

  const moveList = (pos) => {
    const curHeight = parseFloat(getComputedStyle(scrollCur.current).height);
    if (!pos || pos < 0) {
      pos = 0;
    }
    else if (pos + curHeight > list.current.offsetHeight) {
      pos = list.current.offsetHeight - curHeight;
    }
    setY(pos);
  }

  const scrollList = (e) => {
    if (!dragging) {
      let curPos = parseFloat(getComputedStyle(scrollCur.current).transform.split(',')[5]);
      curPos += e.deltaY * list.current.offsetHeight / list.current.scrollHeight;
      moveList(curPos);
    }
  };

  const touchStart = (e) => {
    const curPos = parseFloat(getComputedStyle(scrollCur.current).transform.split(',')[5]);
    setTouch(curPos + e.touches[0].clientY * list.current.offsetHeight / list.current.scrollHeight);
    setAnim("0s");
    setOpacity(1);
  };

  const touchMove = (e) => {
    moveList(touchPos - e.touches[0].clientY * list.current.offsetHeight / list.current.scrollHeight);
  }

  const touchEnd = () => {
    setAnim("all 0.3s");
    setOpacity(0);
  }

  const mouseDown = (e) => {
    setDrag(parseFloat(getComputedStyle(scrollCur.current).transform.split(',')[5]) - e.clientY);
  };

  useEffect(() => {
    document.onmouseup = () => {
      setDrag(0);
      setAnim("all 0.3s");
    };
    document.onmousemove = (e) => {
      if (dragging) {
        setAnim("0s");
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        moveList(e.clientY + dragging);
      }
    }
  }, [dragging]);

  return (
    <div className={style.container} onWheel={scrollList} ref={list} onMouseOver={() => setOpacity(1)} onMouseOut={() => setOpacity(0)}>
      <div className={style.currentBar} style={list.current ?{
        display: list.current.offsetHeight == list.current.scrollHeight ? "none" : "block",
        height: 100 * list.current.offsetHeight / list.current.scrollHeight + "%",
        opacity: scrollOpacity,
        transform: "translateY(" + scrollY + "px)",
        transition: animation}
        :{}} ref={scrollCur} onMouseDown={mouseDown}></div>
      <div style={list.current ? {
        transform: "translateY(-" + scrollY * list.current.scrollHeight / list.current.offsetHeight + "px)",
        transition: animation
        } : {}} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
        {props.songs.map((child, index) => {
          return (
          <a className={style.item} key={index}>
            <span className={style.name} onClick={() => props.change(index)}>{child.name}</span>
            <div className={style.songDetail}>
              <span className={style.singer}>{child.singer}</span>
              <span className={style.length}>{child.length}</span>
            </div>
          </a>
          );
        })}
      </div>
    </div>
  )
}