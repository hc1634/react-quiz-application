import React, { useContext, useMemo, useCallback } from "react";
import DataContext from "../data/dataContext";
const Quiz = () => {
  const {
    showQuiz,
    question,
    quizs,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useContext(DataContext);

  const currentQuestionNumber = useMemo(
    () => quizs.indexOf(question) + 1,
    [quizs, question]
  );
  const totalQuestions = useMemo(() => quizs.length, [quizs]);

  const handleAnswerClick = useCallback(
    (event, item) => {
      if (!selectedAnswer) {
        checkAnswer(event, item);
      }
    },
    [checkAnswer, selectedAnswer]
  );

  if (!showQuiz) return null;

  return (
    <section className="quiz-section bg-dark text-white">
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <center>
              <h1 className="pb-3">React Quiz</h1>
            </center>
            <div className="card p-4 custom-card-bg">
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className="mb-2 fs-normal lh-base text-white">
                  {question?.question}
                </h5>
                <h5 className="question-counter">
                  {currentQuestionNumber} / {totalQuestions}
                </h5>
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${
                      correctAnswer === item ? "bg-success" : ""
                    }`}
                    onClick={(event) => handleAnswerClick(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {selectedAnswer && (
                <div className="mt-3">
                  <p className="text-white">
                    Explanation : {question.explanation}
                  </p>
                </div>
              )}
              <button
                className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                onClick={
                  questionIndex + 1 !== totalQuestions
                    ? nextQuestion
                    : showTheResult
                }
                disabled={!selectedAnswer}
              >
                {questionIndex + 1 !== totalQuestions
                  ? "Next Question"
                  : "Show Result"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
