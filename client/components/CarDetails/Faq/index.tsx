import React from "react";
import Question from "./Question";
import { Question1, Question2, Question3 } from "./QuestionCollection";

const Faq = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-4/5">
        <h1 className="font-semibold text-2xl">Frequently asked questions</h1>
        <Question
          title="Can I view and test drive the car before I buy it?"
          questionComponent={<Question1 />}
        />
        <Question
          title="How does finance work?"
          questionComponent={<Question2 />}
        />
        <Question
          title="How can I part exchange my car?"
          questionComponent={<Question3 />}
        />
      </div>
    </div>
  );
};

export default Faq;
