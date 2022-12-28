import React, { MouseEvent } from "react";

interface Props {
  color: string;
  onClick: (event: MouseEvent) => void;
}
const MinusIcon: React.FC<Props> = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-test-id="accordion-item-collapse"
      className="sc-1y62jhi-0 fCpWUh"
    >
      <path
        d="M18.857 13H5.143C4.514 13 4 12.55 4 12s.514-1 1.143-1h13.714c.629 0 1.143.45 1.143 1s-.514 1-1.143 1Z"
        fill={color}
      ></path>
    </svg>
  );
};

export default MinusIcon;
