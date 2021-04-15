import React, { useEffect, useRef, useState } from "react";
import style from "./NewsContainer.module.css"

import NewsBox from "../NewsBox/NewsBox"

function NewsContainer(props) {
  let newsNum = 0;
  let flag = true;
  const [news, setNews] = useState('');
  const [newsList,] = useState([]);
  const container = useRef();

  const getMore = () => {
    if (window.innerHeight + window.pageYOffset >= container.current.scrollHeight) {
      if (!flag) return;
      flag = false;
      fetch("/api/news", {body: JSON.stringify({'more': newsNum}), method: 'POST'}).then((res) => {
        if (res.status == 200) {
          newsNum ++;
          return res.json();
        }
      }).then((data) => {
        console.log(data);
        if (!data) return;
        for (const n of data["data"]) {
          setNews(<NewsBox data={n} key={n["item_id"]} />);
        }
        flag = true;
      });
    }
  };

  useEffect(() => {
    getMore();
    window.addEventListener('scroll', getMore);
    return () => window.removeEventListener("scroll", getMore);
  }, []);

  useEffect(() => {
    if (news) {
      newsList.push(news);
    }
  }, [news]);
  
  return (
    <div className={style.NewsContainer} ref={container}>
      {newsList}
    </div>
  )
}

export default NewsContainer