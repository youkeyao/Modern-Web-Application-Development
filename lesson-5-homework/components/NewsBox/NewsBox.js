import { useEffect, useState } from 'react'
import style from "./NewsBox.module.css"

function bigNum(num) {
  if (num > 10000) {
    num = parseInt(num / 10000);
    return num.toString() + "万";
  }
  else if (num) {
    return num.toString();
  }
}

function countTime(behot, date) {
  const now = new Date();
  const last = now.getTime() / 1000 - behot;
  if (last >= 24 * 60 * 60 * 365) {
    return date;
  }
  else if (last >= 24 * 60 * 60) {
    return date.slice(4, -1)
  }
  else {
    if (last >= 60 * 60) {
      return parseInt(last / (60 * 60)) + '小时前';
    } else if (last >= 60) {
      return parseInt(last / 60) + '分钟前';
    } else {
      return '刚刚';
    }
  }
}

function NewsBox(props) {
  const [mode, setMode] = useState(style.single);
  useEffect(() => {
    if (props.data["middle_mode"] || !props.data["article_type"] && props.data["large_mode"]) {
      setMode(style.middle);
    }
  });
  return (
    <div className={style.NewsBox}>
      <a href={props.data["display_url"]} className={style.link}>
        <div className={mode}>
          <h3 className={style.title}>{props.data["title"]}</h3>
          {props.data["image_list"].length && !props.data["large_mode"] ?
          <div className={style.imgList}>
            <ul>
              <li className={style.imgItem}>
                <img src={props.data["image_list"][0]["url"]}></img>
              </li>
              <li className={style.imgItem}>
                <img src={props.data["image_list"][1]["url"]}></img>
              </li>
              <li className={style.imgItem}>
                <img src={props.data["image_list"][2]["url"]}></img>
              </li>
            </ul>
          </div> : ""}
          {(props.data["gallary_image_count"] || props.data["article_type"]) && props.data["large_mode"] ? 
          <div className={style.largeImg}>
            <img src={props.data["large_image_url"]}></img>
          </div> : ""}
          <div className={style.footer}>
            <div>
              {props.data["ad_label"] ? <span className={style.ad}>广告</span> : ""}
              <span>{props.data["media_name"]}</span>
              <span>评论 {bigNum(props.data["comment_count"])}</span>
              <span>{countTime(props.data["behot_time"], props.data["datetime"])}</span>
            </div>
          </div>
        </div>
        {props.data["middle_mode"] || !props.data["article_type"] && props.data["large_mode"] ? 
        <div className={style.imgItem}>
          <img src={props.data["image_url"] ? props.data["image_url"] : props.data["large_image_url"]}></img>
        </div> : ""}
      </a>
    </div>
  )
}

export default NewsBox