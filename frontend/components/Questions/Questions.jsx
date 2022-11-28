import QuestionsComponent from "./QuestionsComponent";
import styles from "./Questions.model.css";

function Questions() {
  return (
    <>
      <div className={styles.question_component}>
        <QuestionsComponent />
      </div>
    </>
  );
}

export default Questions;