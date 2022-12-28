import React from "react";
import Question from "../../CarDetails/Faq/Question";
import {
  CommonQuestion1,
  CommonQuestion2,
  CommonQuestion3,
  CommonQuestion4,
} from "./QuestionCollection";

const CommonQuestions = () => {
  return (
    <div className="py-10">
      <h1 className="font-semibold text-2xl">
        Common questions about used cars
      </h1>
      <Question
        title="What are the advantages of used cars?"
        questionComponent={<CommonQuestion1 />}
      />
      <Question
        title="What’s a good mileage for a used car?"
        questionComponent={<CommonQuestion2 />}
      />
      <Question
        title="Can I return a used car?"
        questionComponent={<CommonQuestion3 />}
      />
      <Question
        title="Do used cars have a warranty?"
        questionComponent={<CommonQuestion4 />}
      />
    </div>
  );
};

export default CommonQuestions;
