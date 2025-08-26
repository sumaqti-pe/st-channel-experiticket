import React from "react";

interface UserProps {
  color?: string;
}

export const User: React.FC<UserProps> = ({ color = "#ED1C24" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9993 13.3333C18.9449 13.3333 21.3327 10.9455 21.3327 8C21.3327 5.05448 18.9449 2.66666 15.9993 2.66666C13.0538 2.66666 10.666 5.05448 10.666 8C10.666 10.9455 13.0538 13.3333 15.9993 13.3333Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 29.3333C28 26.1507 26.7357 23.0985 24.4853 20.848C22.2348 18.5976 19.1826 17.3333 16 17.3333C12.8174 17.3333 9.76516 18.5976 7.51472 20.848C5.26428 23.0985 4 26.1507 4 29.3333H28Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
