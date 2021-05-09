import style from "../styles/Home.module.css"

import { useEffect, useRef, useState } from 'react'
import { getInitial } from './api/feeds'
import type { GetServerSideProps } from 'next';
import { useGesture } from 'react-use-gesture'

import Header from "../components/index/IndexHeader/IndexHeader"
import Footer from "../components/Footer/Footer"
import ProblemBox from "../components/index/ProblemBox/ProblemBox"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = getInitial();
  return {
    props: { data },
  };
}

export default function Home({data}) {
  let feedsPage: number = 0;
  const [feedsNum, setFeedsNum]: [number, any] = useState(1);
  const [problemList, setList] = useState({"array": 
    data.map((value: { [key: string]: any }, index: number) => <ProblemBox data={value} key={index} />)
  });
  const mainRef = useRef();

  const getMore = () => {
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
    if (scrollTop + windowHeight == scrollHeight) {
      const more = ++ feedsPage;
      fetch("/api/feeds", {body: JSON.stringify({'more': more}), method: 'POST'}).then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      }).then((data) => {
        console.log(data);
        if (!data) return;
        data.map((value: { [key: string]: any }, index: number) => problemList["array"].push(<ProblemBox data={value} key={index+more*5} />));
        setList({"array": problemList["array"]});
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', getMore);
    return () => window.removeEventListener("scroll", getMore);
  }, []);

  const bind = useGesture({
    onDrag: ({movement}) => {
      const main: any = mainRef.current;
      const width: any = main.offsetWidth;
      if (Math.abs(movement[0]) < width / 14) {
        const toMove = - feedsNum / 14 + movement[0] / width > 0 ? 0 : - feedsNum / 14 + movement[0] / width;
        main.style.transform = "translateX(" + toMove * 100 + "%)";
        main.style.transition = 'none';
      }
    },
    onDragEnd: ({velocities, movement, direction}) => {
      const main: any = mainRef.current;
      main.style.transition = 'transform 0.2s';
      if (Math.abs(movement[0]) > main.offsetWidth / 14 / 2 || Math.abs[velocities[0]] > 5) {
        setFeedsNum((old) => old - Math.round(direction[0]));
      }
      else {
        main.style.transform = "translateX(-"+(100/14)*feedsNum+"%)";
      }
    },
  });

  return (
    <div className={style.container}>
      <div className={style.header}>
       <Header main={mainRef} feeds={feedsNum} setFeeds={setFeedsNum} />
      </div>
      <div className={style.main} ref={mainRef} style={{transform: "translateX(-"+100/14+"%)"}} {...bind(1)}>
        <div className={style.feedsList}>关注</div>
        <div className={style.feedsList}>{problemList["array"]}</div>
        <div className={style.feedsList}>热榜</div>
        <div className={style.feedsList}>动漫</div>
        <div className={style.feedsList}>知识</div>
        <div className={style.feedsList}>校园</div>
        <div className={style.feedsList}>考研</div>
        <div className={style.feedsList}>美食</div>
        <div className={style.feedsList}>职场</div>
        <div className={style.feedsList}>数码</div>
        <div className={style.feedsList}>心理</div>
        <div className={style.feedsList}>科学</div>
        <div className={style.feedsList}>影视</div>
        <div className={style.feedsList}>娱乐</div>
      </div>
      <div className={style.footer}>
        <Footer page="home" />
      </div>
    </div>
  )
}