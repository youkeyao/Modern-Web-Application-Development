import style from "./SelfBox.module.css"

export default function SelfBox(props) {
    return (
      <div className={style.container}>
        <div className={style.nameBox}>
          <div className={style.nameLeft}>
            <img src="https://pic4.zhimg.com/aadd7b895_xs.jpg?source=1940ef5c"></img>
            <div>
              <p className={style.name}>用户</p>
              <div className={style.saltValue}><div className={style.saltIcon}></div>知乎盐值：0 &gt;</div>
            </div>
          </div>
          <a className={style.personalPage} href="#">个人主页 &gt;</a>
        </div>
        <div className={style.recordBox}>
          <div className={style.recordItem}>
            <p className={style.recordNum}>0</p>
            <p className={style.recordName}>创作</p>
          </div>
          <div className={style.recordItem}>
            <p className={style.recordNum}>0</p>
            <p className={style.recordName}>关注</p>
          </div>
          <div className={style.recordItem}>
            <p className={style.recordNum}>0</p>
            <p className={style.recordName}>收藏</p>
          </div>
          <div className={style.recordItem}>
            <p className={style.recordNum}>0</p>
            <p className={style.recordName}>最近浏览</p>
          </div>
        </div>
        <div className={style.VIPBox}>
          <div>
            <p className={style.VIPText1}>开通盐选会员</p>
            <p className={style.VIPText2}>畅享 10w+ 优质内容</p>
          </div>
          <button className={style.VIPBtn}>首月仅 ￥9</button>
        </div>
        <div className={style.funcBox}>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/bookshelf.jpg"></img><p>书架</p></a>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/purchase.jpg"></img><p>已购</p></a>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/money.jpg"></img><p>付费咨询</p></a>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/activity.jpg"></img><p>活动广场</p></a>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/wallet.jpg"></img><p>钱包</p></a>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/community.jpg"></img><p>社区共建</p></a>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/feedback.jpg"></img><p>反馈与帮助</p></a>
          <a className={style.funcIcon} href="#"><img src="/MeIcon/envelope.jpg"></img><p>邀新得红包</p></a>
        </div>
      </div>
    )
  }