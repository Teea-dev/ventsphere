import React from "react";
import { IconTypes } from "./types";

const FacebookIcon = ({ width = 19, height = 18 }: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4619 9C17.4619 4.86 14.1019 1.5 9.96191 1.5C5.82191 1.5 2.46191 4.86 2.46191 9C2.46191 12.63 5.04191 15.6525 8.46191 16.35V11.25H6.96191V9H8.46191V7.125C8.46191 5.6775 9.63941 4.5 11.0869 4.5H12.9619V6.75H11.4619C11.0494 6.75 10.7119 7.0875 10.7119 7.5V9H12.9619V11.25H10.7119V16.4625C14.4994 16.0875 17.4619 12.8925 17.4619 9Z"
        fill="black"
        fillOpacity="0.39"
      />
    </svg>
  );
};
export default FacebookIcon;
