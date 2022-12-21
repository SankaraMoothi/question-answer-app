import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {show ? (
          <button className="btn" onClick={() => setShow(!show)}>
            <AiOutlineMinus />
          </button>
        ) : (
          <button className="btn" onClick={() => setShow(!show)}>
            <AiOutlinePlus />
          </button>
        )}
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;
