import React, { useEffect, useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture'
import './Carousel.css';

function Carousel(props) {
  const content_num = props.children.length + 2; //真实内容个数为用户内容个数+2
  const duration = props.duration; //过渡时间
  const waitTime = props.waitTime; //停留时间
  const hasLoaded = new Array(content_num); //是否已加载
  const [content_children,] = useState(new Array(content_num)); //真实内容
  const [content_id, setID] = useState(-1); //真实内容id
  const [content_height, setHeight] = useState(0); //list高度
  const [autoPlay, setAutoPlay] = useState(true); //自动播放
  const [changeListEnd, setEnd] = useState(null); //list换边
  const content_ref = useRef(); //list的reference
  const dot_ref = useRef(); //dotList的reference

  //将真实内容id转换为用户内容id
  const changeID = (id) => {
    return (id + content_num - 3) % (content_num - 2);
  };

  //更新点从old_id到new_id
  const changeDot = (old_id, new_id) => {
    let old_li = dot_ref.current.children[old_id];
    let new_li = dot_ref.current.children[new_id];
    old_li.className = "Dot";
    new_li.className = "Dot-select";
  };

  //加载内容
  const loadContent = (i) => {
    if (!hasLoaded[i]) {
      hasLoaded[i] = true;
      content_children[i] = React.cloneElement(props.children[changeID(i)], {className:"Content", style:{width:100/content_num+'%'}, key:i, onLoad:()=>{
        setHeight(content_ref.current.offsetHeight);
      }});
    }
  };

  //内容移动，flag=true代表index为绝对值，flag=false代表index为相对值
  const moveList = (index, flag) => {
    const old_id = changeListEnd();
    const new_id = flag ? index : old_id + index;
    
    //加载内容
    for (let i=old_id; i!==new_id; i+=Math.sign(new_id-old_id)) {
      loadContent(i);
    }
    loadContent(new_id);

    //移动
    changeDot(changeID(old_id), changeID(new_id));
    const content_width = parseFloat(getComputedStyle(content_ref.current).width) / content_num;
    const toMove = - new_id * content_width;
    content_ref.current.style.left = toMove + 'px';
    content_ref.current.style.transition = 'left ' + duration;
    setID(new_id);

    //视频时间同步
    if (content_ref.current.children[old_id].pause) content_ref.current.children[old_id].pause();
    if (content_ref.current.children[new_id].pause) content_ref.current.children[new_id].pause();
    if (new_id === 0 && content_ref.current.children[content_num - 2].currentTime) {
      content_ref.current.children[0].currentTime = content_ref.current.children[content_num - 2].currentTime;
    }
    else if (new_id === content_num - 2 && content_ref.current.children[0].currentTime) {
      content_ref.current.children[content_num - 2].currentTime = content_ref.current.children[0].currentTime;
    }
    else if (new_id === 1 && content_ref.current.children[content_num - 1].currentTime) {
      content_ref.current.children[1].currentTime = content_ref.current.children[content_num - 1].currentTime;
    }
    else if (new_id === content_num - 1 && content_ref.current.children[1].currentTime) {
      content_ref.current.children[content_num - 1].currentTime = content_ref.current.children[1].currentTime;
    }
  }

  //绑定useGesture
  const bind = useGesture({
    onDragStart: () => changeListEnd(),
    onDrag: ({movement}) => {
      if (Math.abs(movement[0]) < content_ref.current.offsetWidth / content_num) {
        const origin_left = - content_id * content_ref.current.offsetWidth / content_num;
        content_ref.current.style.left = origin_left + movement[0] + 'px';
        content_ref.current.style.transition = '0s';
      }
    },
    onDragEnd: ({velocities, movement}) => {
      if (Math.abs(movement[0]) > content_ref.current.offsetWidth / content_num / 2) {
        moveList(-Math.sign(movement[0]), false);
      }
      else if (Math.abs[velocities[0]] > 5) {
        moveList(-Math.sign(movement[0]), false);
      }
      else {
        const content_width = parseFloat(getComputedStyle(content_ref.current).width) / content_num;
        content_ref.current.style.left = - content_id * content_width + 'px';
        content_ref.current.style.transition = 'left ' + duration;
      }
    },
    onHover: (e) => setAutoPlay(!e.hovering),
  });

  useEffect(() => {
    //初始化
    if (content_id === -1) {
      for (let i=0; i<content_num; i++) {
        content_children[i] = React.cloneElement(<div></div>, {className:"Content", style:{width:100/content_num+'%'}, key:i});
      }
      content_ref.current.style.left = - parseFloat(getComputedStyle(content_ref.current).width) / content_num + 'px';
      setID(1);
      loadContent(1);
      loadContent(0);
      loadContent(content_num - 1);
      changeDot(0, 0);
    }
    //更新changeListEnd
    setEnd(() => {return () => {
      if (content_id === 0) {
        const content_width = parseFloat(getComputedStyle(content_ref.current).width) / content_num;
        const current_left = parseFloat(getComputedStyle(content_ref.current).left);
        const toMove = - (content_num - 2) * content_width + current_left;
        content_ref.current.style.left = toMove + 'px';
        content_ref.current.style.transition = 'left 0s';
        setID(content_num - 2);
        return content_num - 2;
      }
      else if (content_id === content_num - 1) {
        const content_width = parseFloat(getComputedStyle(content_ref.current).width) / content_num;
        const current_left = parseFloat(getComputedStyle(content_ref.current).left);
        const toMove = (content_num - 2) * content_width + current_left;
        content_ref.current.style.left = toMove + 'px';
        content_ref.current.style.transition = 'left 0s';
        setID(1);
        return 1;
      }
      else return content_id;
    }});
    //eslint-disable-next-line
  }, [content_id]);

  //自动播放
  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        moveList(1, false);
      }, parseFloat(waitTime) * 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
    //eslint-disable-next-line
  }, [autoPlay, changeListEnd]);

  //窗口大小改变重新设置高度和位置
  window.addEventListener('resize', () => {
    setHeight(content_ref.current.offsetHeight);
    content_ref.current.style.left = - content_id * content_ref.current.offsetWidth / content_num + 'px';
  });

  return (
    <div className="Carousel">
      <div className="Content-show" style={{height:content_height}}>
        <button className="Left-btn" style={{width:content_height/8, height:content_height/8, borderTopWidth:content_height/25, borderLeftWidth:content_height/25}} onClick={() => {
          moveList(-1, false);
        }}></button>
        <ul className="Content-list" style={{width:100*content_num+'%'}} ref={content_ref} {...bind(1)}>
          {content_children}
        </ul>
        <button className="Right-btn" style={{width:content_height/8, height:content_height/8, borderTopWidth:content_height/25, borderRightWidth:content_height/25}} onClick={() => {
          moveList(1, false);
        }}></button>
      </div>
      <ul className="Dot-list" ref={dot_ref}>
        {React.Children.map(props.children, (child, index) => {
          return React.cloneElement(<li></li>, {className:"Dot", onClick:() => {moveList(index+1, true)}});
        })}
      </ul>
    </div>
  );
}

export default Carousel;