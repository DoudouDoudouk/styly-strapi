import React from "react";

interface AIIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const AIIcon: React.FC<AIIconProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      enable-background="new 0 0 256 256"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <path
              fill={color}
              d="M129.1,101.8l20.9,20.9l-5.1,5.1l-20.9-20.9L129.1,101.8z M168.2,78.8c-4.5-4.5-11.7-4.5-16.2,0l-17.4,17.4l20.9,20.9L173,99.7c4.5-4.5,4.5-11.7,0-16.2L168.2,78.8z M13.4,217.5c-4.5,4.5-4.5,11.7,0,16.2l4.7,4.7c4.5,4.5,11.7,4.5,16.2,0L138.6,134l-20.9-20.9L13.4,217.5z M215.9,76.9L212,87.1L201.8,91l10.2,3.9l3.9,10.2l3.9-10.2l10.2-3.9l-10.2-3.9L215.9,76.9z M183.3,32.8l-7-18.5l-7,18.5l-18.5,7l18.5,7l7,18.5l7-18.5l18.5-7L183.3,32.8z M235.1,43.1L231,32.1l-4.1,10.9l-10.9,4.1l10.9,4.1l4.1,10.9l4.1-10.9l10.9-4.1L235.1,43.1z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </g>
      </g>
    </svg>
  );
};

export { AIIcon };
