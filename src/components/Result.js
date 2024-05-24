import React, { useContext } from "react";
import DataContext from "../data/dataContext";

const Result = () => {
  const { showResult, quizs, marks, startOver } = useContext(DataContext);
  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showResult ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-6">
            <div
              className={`text-light text-center p-5 rounded ${
                marks > (quizs.length * 6) / 2 ? "bg-success" : "bg-danger"
              }`}
            >
              <h1 className="mb-2 fw-bold">
                {marks > (quizs.length * 6) / 2 ? "Well done 🎉" : "Oops 😟"}
              </h1>
              <h3 className="mb-3 fw-bold">
                Your score is {marks} out of {quizs.length * 5}
              </h3>

              <button
                onClick={startOver}
                className="btn py-2 px-4 btn-light fw-bold d-inline"
              >
                {marks > (quizs.length * 6) / 2
                  ? "Start Over"
                  : "Retry the Quiz"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;