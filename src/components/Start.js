import React, { useContext } from "react";
import DataContext from "../data/dataContext";

const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="vh-100 row align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4">React JS Quiz</h1>
            <div className="starting-card">
              <p>The Quiz contains 10 questions and there is no time limit.</p>
              <p>
                The test is not official, it's just a nice way to see how much
                you know, or don't know, about React.
              </p>
              <p>You will get 5 points for each correct answer.</p>
              <p>At the end of the Quiz, your total score will be displayed.</p>
              <p>Maximum score is 50 points.</p>
              <p>You have to score atleast 30, All the best!</p>
              <button
                onClick={startQuiz}
                className="btn px-4 py-2 bg-light text-dark fw-bold"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
