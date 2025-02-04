import React from "react";

const Summary = ({
  nameInput,
  songInput,
  birdInput,
  radioInput,
  ageRadioInput,
  colorInput,
  happiness,
}) => {
  return (
    <section className="form-container">
      <h2 className="label-text">Here's your summary</h2>
      <div className="summary-container">
        <p>
          name:<span className="answer-text"> {nameInput}</span>
        </p>
        <p>
          last song listened to:{" "}
          <span className="answer-text"> {songInput}</span>
        </p>
        <p>
          {" "}
          least favorite bird:<span className="answer-text"> {birdInput} </span>
        </p>
        <p>
          can you lick your elbow?{" "}
          <span className="answer-text">{radioInput}</span>
        </p>
        <p>
          you feel this old:
          <span className="answer-text"> {ageRadioInput}</span>
        </p>
        <p>
          fourth favorite color in code:
          <span className="answer-text"> {colorInput}</span>
        </p>
        <p>
          kittens makes you feel like this:
          <span className="answer-text"> {happiness}</span>
        </p>
        <form className="submit-button-form">
          <button className="submitBtn" type="submit">
            restart
          </button>
        </form>
      </div>
    </section>
  );
};

export default Summary;
