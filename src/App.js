import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h3>Questions And Answers About Me</h3>
          <section className="info">
            {question.map((questions) => {
              return <SingleQuestion key={questions.id} {...questions} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
