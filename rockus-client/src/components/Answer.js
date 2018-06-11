import React from "react";

export default (props) => {
  let status = props.show ? "answer" : "answer flip-backward";
  return (
    <div className={status}>Answer - {props.title} Score - {props.score}</div>
  )
};
