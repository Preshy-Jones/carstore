import React, { MouseEvent } from "react";

interface Props {
  color: string;
  onClick?: (event: MouseEvent) => void;
}
const PlusIcon: React.FC<Props> = ({ color, ...rest }) => {
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-test-id="accordion-item-expand"
      className="sc-1qvg9et-0 bfgSBf"
    >
      <path
        d="M18.857 13.143h-5.714v5.714c0 .629-.514 1.143-1.143 1.143a1.146 1.146 0 0 1-1.143-1.143v-5.714H5.143A1.146 1.146 0 0 1 4 12c0-.629.514-1.143 1.143-1.143h5.714V5.143C10.857 4.514 11.371 4 12 4s1.143.514 1.143 1.143v5.714h5.714c.629 0 1.143.514 1.143 1.143s-.514 1.143-1.143 1.143Z"
        fill={color}
      ></path>
    </svg>
  );
};

export default PlusIcon;
