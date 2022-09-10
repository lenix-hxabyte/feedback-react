import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../FeedbackContext";
function FeedbackStats({}) {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  console.log(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} </h4>
      <h4>average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
