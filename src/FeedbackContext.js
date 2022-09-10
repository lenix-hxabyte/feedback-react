import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "this item is from context", rating: 10 },
    { id: 2, text: "this is the fileeees", rating: 3 },
    { id: 3, text: "this item is from context", rating: 4 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedback = (id) => {
    if (window.confirm("Are yous ure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id, upditem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
    );
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
