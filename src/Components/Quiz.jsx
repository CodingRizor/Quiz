import React from "react";
import "./Quiz.css";
import { useState, useEffect } from "react";

const CountryData = () => {
  const [cname, scname] = useState([]);
  const [results, finalres] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQues, setCurrentQues] = useState(0);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        scname(data.data);
      });
  }, []);

  const restartGame = () => {
    setScore(0);
    setCurrentQues(0);
    finalres(false);
  };
  let namearray = [5];
  let capitalArray = [5];

  let fx = (i) => {
    let countryName = "";
    let capitalName = "";
    let countryNum = Math.floor(Math.random() * cname.length);
    if (countryNum) {
      countryName = cname[countryNum].name;
      capitalName = cname[countryNum].capital;
      
    }
    namearray[i] = countryName;
    capitalArray[i] = capitalName;
  };

  for (let i = 0; i < 5; i++) {
    fx(i);
  }

  for (let j = 0; j < namearray.length; j++) {
   
  }

  for (let k = 0; k < capitalArray.length; k++) {
   
  }

  const questions = [
    {
      questionText: "What is the capital of " + namearray[0] + "?",
      answerOptions: [
        { answerText: capitalArray[0], isCorrect: true },
        { answerText: capitalArray[1], isCorrect: false },
        { answerText: capitalArray[2], isCorrect: false },
        { answerText: capitalArray[3], isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of " + namearray[1] + "?",
      answerOptions: [
        { answerText: capitalArray[4], isCorrect: false },
        { answerText: capitalArray[1], isCorrect: true },
        { answerText: capitalArray[0], isCorrect: false },
        { answerText: capitalArray[3], isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of " + namearray[2] + "?",
      answerOptions: [
        { answerText: capitalArray[4], isCorrect: false },
        { answerText: capitalArray[0], isCorrect: false },
        { answerText: capitalArray[2], isCorrect: true },
        { answerText: capitalArray[3], isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of " + namearray[3] + "?",
      answerOptions: [
        { answerText: capitalArray[4], isCorrect: false },
        { answerText: capitalArray[2], isCorrect: false },
        { answerText: capitalArray[1], isCorrect: false },
        { answerText: capitalArray[3], isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of " + namearray[4] + "?",
      answerOptions: [
        { answerText: capitalArray[4], isCorrect: true },
        { answerText: capitalArray[1], isCorrect: false },
        { answerText: capitalArray[2], isCorrect: false },
        { answerText: capitalArray[3], isCorrect: false },
      ],
    },
  ];
  const hoc = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextq = currentQues + 1;
    if (nextq < questions.length) {
      setCurrentQues(nextq);
    } else {
      finalres(true);
    }
  };
  return (
    <>
      <h4>Quiz</h4>
      <div id="head">Welcome Dhairya</div>
      <hr />
      {results ? (
        <div className="final-res">
          Final Results
          <h4>you scored {score} out of 5</h4>
          <button onClick={() => restartGame()}>Restart</button>
        </div>
      ) : (
        <div>
          <div id="quescard">
            <h3>
              {currentQues + 1}. {questions[currentQues].questionText}
            </h3>
            {questions[currentQues].answerOptions.map((ansopt) => (
            
              <button onClick={() => hoc(ansopt.isCorrect)}>
                {ansopt.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CountryData;
