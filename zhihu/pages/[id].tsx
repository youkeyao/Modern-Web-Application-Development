import style from "../styles/answer.module.css"

import getData from "./api/getData"
import type { GetServerSideProps } from 'next';

import AnswerHeader from "../components/answer/AnswerHeader/AnswerHeader"
import AnswerFooter from "../components/answer/AnswerFooter/AnswerFooter"
import AnswerTitle from "../components/answer/AnswerTitle/AnswerTitle"
import AnswerContent from "../components/answer/AnswerContent/AnswerContent"
import AnswerComment from "../components/answer/AnswerComment/AnswerComment"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  const data = getData(id);

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      data: data ? data : null,
    },
  };
};

export default function answer(props) {
  const data = props.data;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <AnswerHeader />
      </div>
      <div className={style.main}>
        <AnswerTitle title={data["title"]} answerNum={data["answerNum"]} attention={data["attention"]} />
        <AnswerContent avatar={data["avatar"]} name={data["name"]} info={data["info"]} agree={data["agree"]} content={data["content"]} time={data["time"]} />
        <AnswerComment comment={data["comment"]} commenter1={data["commenter1"]} commenter2={data["commenter2"]} />
      </div>
      <div className={style.footer}>
        <AnswerFooter agree={data["agree"]} like={data["like"]} star={data["star"]} comment={data["comment"]} />
      </div>
    </div>
  )
}