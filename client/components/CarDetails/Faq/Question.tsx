import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "../../ui/icons";

interface Props {
  questionComponent?: React.ReactNode;
  title: string;
}

const Question: React.FC<Props> = ({ questionComponent,title }) => {
  const [questionOpen, setQuestionOpen] = useState<Boolean>(false);
  return (
    <div
      className={`${questionOpen ? "border-b-primaryMain border-b pb-3" : ""}`}
    >
      <div
        onClick={() => setQuestionOpen(!questionOpen)}
        className={`flex justify-between cursor-pointer ${
          questionOpen ? "mb-3" : `border-b-borderMain border-b`
        } py-4`}
      >
        <h3 className="font-semibold">
          {title}
        </h3>
        <div className="flex">
          {questionOpen ? (
            <MinusIcon color="#D14532" />
          ) : (
            <PlusIcon color="#D14532" />
          )}
        </div>
      </div>
      {questionOpen && questionComponent}
    </div>
  );
};

export default Question;
