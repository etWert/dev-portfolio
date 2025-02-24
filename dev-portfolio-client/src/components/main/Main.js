import React from 'react';
import { ReactTyped } from 'react-typed';
import "./main.css"
const Main = () => {
  return (
    <div id="main" className="main-container">
      <ReactTyped
        className="typed-text"
        strings={[
          "Imagine Possibilities",
          "Solve Challenges",
          "Achieve Success"
        ]}
        typeSpeed={100} // מהירות הקלדה של תו
        backSpeed={30} // מהירות החזרה אחורה של תו
        backDelay={1000} // זמן המתנה אחרי כל מילה
        startDelay={500} // זמן המתנה לפני שמתחילים להקליד
        loop
      />
    </div>
  );
};

export default Main;
