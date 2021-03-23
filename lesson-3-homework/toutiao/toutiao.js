const category = document.querySelector(".category");
const content = document.querySelector(".content");
let n = 0;
const MONTH = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
getMore();

window.onscroll = function() {
    //目录fixed
    if (window.pageYOffset > 10) {
        category.style.position = "fixed";
        category.style.top = "10px";
    }
    else {
        category.style.position = "relative";
        category.style.top = "0px";
    }

    //是否滑到底部
    if (window.innerHeight + window.pageYOffset >= content.scrollHeight) {
        getMore();
    }
}

//大数字聚合
function bigNum(num) {
    if (num > 10000) {
        num = parseInt(num / 10000);
        return num.toString() + "万";
    }
    else {
        return num.toString();
    }
}

//计算相差时间
function countTime(time) {
	let now = new Date();
	let last = now.getTime() / 1000 - time;
	let result = '';
	if (last >= 24 * 60 * 60) {
        let day = parseInt(last / (24 * 60 * 60));
		result = day + '天前';
		if (day >= 365) {
            result = parseInt(day / 365) + '年前';
        }
        else if (day >= MONTH[now.getMonth()]) {
            let now_month = now.getMonth();
            let ans = 0;
            while (day >= MONTH[now_month]) {
                day -= MONTH[now_month];
                ans += 1;
                now_month = (now_month + 11) % 12;
            }
            result = ans + '月前';
        }
    }
    else {
		if (last >= 60 * 60) {
			result = parseInt(last / (60 * 60)) + '小时前';
		} else if (last >= 60) {
			result = parseInt(last / 60) + '分钟前';
		} else {
			result = '刚刚';
		}
	}
	return result;
}

//获得新数据
function getMore() {
    let obj = new XMLHttpRequest();
    const msg = {"more": n++};
    obj.open("post", "data.json");
    obj.send(JSON.stringify(msg));
    obj.onreadystatechange = function() {
        if (obj.status == 200 && obj.readyState == 4){
            let data = JSON.parse(obj.responseText);
            console.log(data["data"]);
            for (const news of data["data"]) {
                let div = document.createElement("div");

                //left img
                if (news["has_gallery"]) {
                    div.className = "gallery-news";
                }
                else if (news["single_mode"]) {
                    let left = document.createElement("a");
                    left.className = "single-left";
                    left.href = "https://toutiao.com" + news["source_url"];
                    left.target = "_blank";
                    div.appendChild(left);

                    let resource = document.createElement("img");
                    resource.className = "resource";
                    if (news["ugc_data"]) {
                        div.className = "ugc-news";
                        resource.src = "https:" + news["ugc_data"]["ugc_images"][0];
                        left.appendChild(resource);
                        if (news["image_list"]) {
                            let tip = document.createElement("span");
                            tip.className = "tip";
                            tip.innerHTML = news["image_list"].length + "图";
                            left.appendChild(tip);
                        }
                    }
                    else {
                        div.className = "single-news";
                        resource.src = "https:" + news["image_url"];
                        left.appendChild(resource);
                        if (news["article_genre"] == "video") {
                            let tip = document.createElement("span");
                            tip.className = "tip";
                            tip.innerHTML = "▶ " + news["video_duration_str"];
                            left.appendChild(tip);
                        }
                    }
                }
                else {
                    div.className = "simple-news";
                }

                //right
                let right = document.createElement("div");
                right.className = "single-right";
                div.appendChild(right);
                let text = document.createElement("div");
                text.className = "single-text";
                right.appendChild(text);

                //title
                if (news["ugc_data"]) {
                    let ugc_author = document.createElement("div");
                    ugc_author.className = "ugc-author";
                    text.appendChild(ugc_author);

                    let ugc_icon = document.createElement("img");
                    ugc_icon.className = "ugc-icon";
                    ugc_icon.src = news["ugc_data"]["ugc_user"]["avatar_url"];
                    ugc_author.appendChild(ugc_icon);

                    let ugc_desc = document.createElement("div");
                    ugc_desc.className = "ugc-desc";
                    ugc_author.appendChild(ugc_desc);

                    let ugc_name = document.createElement("a");
                    ugc_name.className = "ugc-name";
                    ugc_name.href = "https://toutiao.com" + news["media_url"];
                    ugc_name.target = "_blank";
                    ugc_name.innerHTML = "<span>" + news["source"] + "</span><img class=\"dv-icon\" src=\"https://p3.pstatp.com/origin/pgc-image/b13dded4c4e948e293e217f95e8565b4\"><span class=\"vtt-icon\">微头条</span>";
                    ugc_desc.appendChild(ugc_name);

                    let ugc_meta = document.createElement("p");
                    ugc_meta.className = "ugc-meta";
                    ugc_meta.innerHTML = "<span>未关注</span><span>&nbsp;·&nbsp;" + news["source"] + "官方账号</span>";
                    ugc_desc.appendChild(ugc_meta);

                    let ugc_content = document.createElement("div");
                    ugc_content.className = "ugc-content";
                    let real_content = document.createElement("a");
                    real_content.href = "https://toutiao.com" + news["source_url"];
                    real_content.target = "_blank";
                    real_content.rel = "noopener noreferrer";
                    real_content.innerHTML = news["ugc_data"]["rich_content"];
                    ugc_content.appendChild(real_content);
                    text.appendChild(ugc_content);
                }
                else {
                    let title = document.createElement("a");
                    title.className = "title";
                    if (news["is_feed_ad"]) {
                        title.href = news["source_url"];
                    }
                    else {
                        title.href = "https://toutiao.com" + news["source_url"];
                    }
                    title.target = "_blank";
                    title.innerHTML = news["title"];
                    text.appendChild(title);
                }

                //content
                if (news["has_gallery"]) {
                    let list = document.createElement("div");
                    list.className = "gallery-list";
                    for (const i of news["image_list"]) {
                        let item = document.createElement("a");
                        item.className = "gallery-item";
                        item.href = news["article_url"];
                        item.target = "_blank";

                        let img = document.createElement("img");
                        img.src = i["pc_url"];

                        item.appendChild(img);
                        list.appendChild(item);
                    }
                    let detail = document.createElement("a");
                    detail.className = "gallery-item";
                    detail.className = "gallery-item";
                    detail.href = news["article_url"];
                    detail.target = "_blank";
                    let detail_text = document.createElement("span");
                    detail_text.className = "gallery-more";
                    detail_text.innerHTML = "查看详情&nbsp;>";
                    detail.appendChild(detail_text);
                    list.appendChild(detail);
                    text.appendChild(list);
                }

                //footer
                let footer = document.createElement("div");
                footer.className = "footer";
                text.appendChild(footer);
                
                let left_footer = document.createElement("div");
                let right_footer = document.createElement("div");
                left_footer.className = "left-footer";
                right_footer.className = "right-footer";
                footer.appendChild(left_footer);
                footer.appendChild(right_footer);
                //tag
                if (news["chinese_tag"]) {
                    let tag = document.createElement("a");
                    switch (news["chinese_tag"]) {
                        case "视频": tag.className = "video";break;
                        case "社会": tag.className = "society";break;
                        case "财经": tag.className = "finance";break;
                        default: tag.className = "other";
                    }
                    tag.href = "https://www.toutiao.com/search/?keyword=" + news["chinese_tag"];
                    tag.target = "_blank";
                    tag.innerHTML = news["chinese_tag"];
                    left_footer.appendChild(tag);
                }
                //icon
                if (news["media_avatar_url"]) {
                    let icon = document.createElement("img");
                    icon.className = "info-icon";
                    icon.src = "https:" + news["media_avatar_url"];
                    left_footer.appendChild(icon);
                }
                else if (news["is_feed_ad"]) {
                    let icon = document.createElement("a");
                    icon.className = "gallery-icon";
                    icon.innerHTML = "微";
                    left_footer.appendChild(icon);
                }
                //source
                if (news["ugc_data"]) {
                    let good = document.createElement("a");
                    good.className = "info";
                    good.href = "https://toutiao.com" + news["source_url"];
                    good.target = "_blank";
                    good.innerHTML = bigNum(news["ugc_data"]["digg_count"]) + "赞";
                    left_footer.appendChild(good);
                }
                else {
                    let source = document.createElement("a");
                    source.className = "info";
                    if (news["media_url"]) {
                        source.href = "https://toutiao.com" + news["media_url"];
                    }
                    else {
                        source.href = "https://www.toutiao.com/search/?keyword=" + news["source"];
                    }
                    source.target = "_blank";
                    source.innerHTML = "&nbsp;" + news["source"];
                    left_footer.appendChild(source);
                }
                //comment
                if (!news["is_feed_ad"]) {
                    let comment = document.createElement("a");
                    comment.className = "info";
                    comment.href = "https://toutiao.com" + news["source_url"];
                    comment.target = "_blank";
                    if (news["comments_count"]) {
                        comment.innerHTML = "&nbsp;⋅&nbsp;" + bigNum(news["comments_count"]) + "评论";
                    }
                    else {
                        comment.innerHTML = "&nbsp;⋅&nbsp;0评论";
                    }
                    left_footer.appendChild(comment);
                }
                //time
                let time = document.createElement("span");
                time.className = "info";
                time.innerHTML = "&nbsp;⋅&nbsp;" + countTime(news["behot_time"]);
                left_footer.appendChild(time);
                //show
                if (news["ugc_data"]) {
                    let show = document.createElement("a");
                    show.className = "info";
                    show.href = "https://toutiao.com" + news["source_url"];
                    show.target = "_blank";
                    show.innerHTML = "&nbsp;⋅&nbsp;" + bigNum(news["ugc_data"]["show_count"]) + news["ugc_data"]["show_text"];
                    left_footer.appendChild(show);
                }
                //ad
                if (news["is_feed_ad"]) {
                    let ad = document.createElement("a");
                    ad.className = "info";
                    ad.href = news["article_alt_url"];
                    ad.target = "_blank";
                    ad.innerHTML = "&nbsp;" + news["ad_label"];
                    left_footer.appendChild(ad);
                }
                //close
                let info_close = document.createElement("span");
                info_close.innerHTML = "✕";
                right_footer.appendChild(info_close);

                content.appendChild(div);
            }
        }
    }
}