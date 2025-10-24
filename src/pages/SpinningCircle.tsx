import React from "react";
import "./SpinningCircle.css";

interface SpinningCircleProps {
  text: string;
  size?: number;
}

const SpinningCircle: React.FC<SpinningCircleProps> = ({ text, size = 300 }) => {
  return (
    <svg
      className="circle-svg"
      viewBox="0 0 600 600"
      width={size}
      height={size}
    >
      <defs>
        <path
          id="circle-path"
          d="M 300, 300 m -250, 0 a 250,250 0 1,0 500,0 a 250,250 0 1,0 -500,0"
        />
      </defs>
      <text>
        <textPath href="#circle-path" className="circle-text">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default SpinningCircle;