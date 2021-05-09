import style from "./CardBox.module.css"

export default function CardBox(props) {
  return (
    <div className={style.container}>
      <div className={style.cardTitle}>
        <span className={style.myCard}>我的卡片</span>
        <a className={style.manageCard} href="#">+ 管理卡片</a>
      </div>
      <div className={style.cardBox}>
        <div className={style.cardHeader}>
          <div className={style.cardName}>
            <img className={style.cardIcon} src="/MeIcon/creatorIcon.jpg"></img>
            <span>创作中心</span>
          </div>
          <a className={style.info} href="#">有新权益待开启 &gt;</a>
        </div>
        <div className={style.createContent}>
          <div>
            <p className={style.info}>昨日阅读（播放）数</p>
            <p className={style.largeText}>计算中</p>
            <p className={style.info}>较前日 --</p>
          </div>
          <div>
            <p className={style.info}>昨日赞同数</p>
            <p className={style.largeText}>计算中</p>
            <p className={style.info}>较前日 --</p>
          </div>
        </div>
      </div>
      <div className={style.cardBox}>
        <div className={style.cardHeader}>
          <div className={style.cardName}>
            <img className={style.cardIcon} src="/MeIcon/editIcon.jpg"></img>
            <span>回答问题</span>
          </div>
          <a className={style.info} href="#">更多问题 &gt;</a>
        </div>
        <div className={style.questionBox}>
          <p className={style.questionTitle}>一些问题</p>
          <div className={style.cardFooter}>
          <span className={style.info}>0 关注</span>
            <div>
              <a className={style.ignoreBtn} href="#">忽略</a>
              <a className={style.blueBtn} href="#">回答</a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardBox}>
        <div className={style.cardHeader}>
          <div className={style.cardName}>
            <img className={style.cardIcon} src="/MeIcon/videoIcon.jpg"></img>
            <span>视频</span>
          </div>
        </div>
        <div className={style.scrollBox}>
          <div className={style.scrollContent}>
            <a className={style.topic} href="#">
              <img src="https://pic4.zhimg.com/50/v2-00f8805ec1d10c26f09a8f6a878c77ed_720w.jpg?source=b1f6dc53"></img>
              <p className={style.topicTitle}>晒出你的夏日旅行打开方式</p>
            </a>
            <div className={style.cardFooter}>
              <span className={style.info}>9450 视频 · 1103 万播放</span>
              <a className={style.blueBtn} href="#">拍视频</a>
            </div>
          </div>
          <div className={style.scrollContent}>
            <a className={style.topic} href="#">
              <img src="https://pic4.zhimg.com/v2-66fa871abac9e79bec4d37021ebd7527_400x224.jpg"></img>
              <p className={style.topicTitle}>参与活动瓜分万元激励金</p>
            </a>
            <div className={style.cardFooter}>
              <span className={style.info}>1.8 万视频 · 2972 万播放</span>
              <a className={style.blueBtn}>拍视频</a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardBox}>
        <div className={style.cardHeader}>
          <div className={style.cardName}>
            <img className={style.cardIcon} src="/MeIcon/chatIcon.jpg"></img>
            <span>你可能感兴趣的圈子</span>
          </div>
          <a className={style.info} href="#">去圈子广场 &gt;</a>
        </div>
        <div className={style.chatBox}>
          <a className={style.chatContent} href="#">
            <img src="https://pic1.zhimg.com/50/v2-3f9e2ae269cd3d130f91851ee8266c98_720w.jpg?source=ba7200d9"></img>
            <p>海贼王圈</p>
          </a>
          <a className={style.chatContent} href="#">
            <img src="https://pic3.zhimg.com/50/v2-4455796b74b17364c0320176072f26b6_720w.jpg?source=ba7200d9"></img>
            <p>一起玩手工</p>
          </a>
          <a className={style.chatContent} href="#">
            <img src="https://pic2.zhimg.com/50/v2-4939b45b89bc5e8ba3151d6e04cb3342_720w.jpg?source=ba7200d9"></img>
            <p>随手解救单身汪</p>
          </a>
          <a className={style.chatContent} href="#">
            <img src="https://pic1.zhimg.com/50/v2-5f28db352d6628c4fe67b5c35170686e_720w.jpg?source=ba7200d9"></img>
            <p>雅思交流圈</p>
          </a>
          <a className={style.chatContent} href="#">
            <img src="https://pic3.zhimg.com/50/v2-715d534f4e4854e3c024e120c9a94abc_720w.jpg?source=ba7200d9"></img>
            <p>摄影暗房Club</p>
          </a>
          <a className={style.chatContent} href="#">
            <img src="https://pic2.zhimg.com/50/v2-00d811f9d9414de414fe824741eb0a08_720w.jpg?source=ba7200d9"></img>
            <p>奇葩说</p>
          </a>
          <a className={style.chatContent} href="#">
            <img src="https://pic3.zhimg.com/50/v2-0c8a8dbcc641d3d6b3e39e106abfe700_720w.jpg?source=ba7200d9"></img>
            <p>不好笑算我输</p>
          </a>
        </div>
      </div>
      <div className={style.cardBox}>
        <div className={style.cardHeader}>
          <div className={style.cardName}>
            <img className={style.cardIcon} src="/MeIcon/roundTableIcon.jpg"></img>
            <span>圆桌</span>
          </div>
          <a className={style.info} href="#">查看更多 &gt;</a>
        </div>
        <div className={style.scrollBox}>
          <div className={style.scrollContent}>
            <a className={style.topic} href="#">
              <img src="https://pic4.zhimg.com/50/v2-b0715321ba391cd5657c40c2c665369c_720w.jpg?source=b1f6dc53"></img>
              <p className={style.topicTitle}>剑指 2021 季中冠军赛</p>
            </a>
            <div className={style.cardFooter}>
              <span className={style.info}>19 条精选内容 · 685 万浏览</span>
            </div>
          </div>
          <div className={style.scrollContent}>
            <a className={style.topic} href="#">
              <img src="https://pic4.zhimg.com/50/v2-b05c15255d1bafef899d4e077b1ec6f6_720w.jpg?source=b1f6dc53"></img>
              <p className={style.topicTitle}>看见中国汽车</p>
            </a>
            <div className={style.cardFooter}>
              <span className={style.info}>6 条精选内容 · 3.1 万浏览</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardBox}>
        <div className={style.cardHeader}>
          <div className={style.cardName}>
            <img className={style.cardIcon} src="/MeIcon/topicIcon.jpg"></img>
            <span>专题</span>
          </div>
          <a className={style.info} href="#">查看更多 &gt;</a>
        </div>
        <div className={style.scrollBox}>
          <div className={style.scrollContent}>
            <a className={style.topic} href="#">
              <img src="https://pic3.zhimg.com/100/v2-52c612a93c12513fd4f59a39a56da696_hd.png"></img>
              <p className={style.topicTitle}>村庄疑云——生化危机 8</p>
            </a>
            <div className={style.cardFooter}>
              <span className={style.info}>4536 万浏览 · 50 关注</span>
            </div>
          </div>
          <div className={style.scrollContent}>
            <a className={style.topic} href="#">
              <img src="https://pic4.zhimg.com/100/v2-3b1668043b526df164e17568e1bf0abb_hd.png"></img>
              <p className={style.topicTitle}>局部空气十万个为什么</p>
            </a>
            <div className={style.cardFooter}>
              <span className={style.info}>158 万浏览 · 193 关注</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}