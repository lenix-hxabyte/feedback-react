import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../FeedbackContext";
function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating} </div>
      <buttton onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </buttton>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text} </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
