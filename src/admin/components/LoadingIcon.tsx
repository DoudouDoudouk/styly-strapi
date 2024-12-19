import React from "react";
import styled, { keyframes } from "styled-components";

interface AILoadingIconProps {
  size?: number;
  color?: string;
}

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const IconWrapper = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSVG = styled.svg`
  animation: ${rotate} 10s linear infinite;
`;

const Circle = styled.circle<{ delay: number }>`
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

export function AILoadingIcon({
  size = 48,
  color = "#3b82f6",
}: AILoadingIconProps) {
  return (
    <IconWrapper size={size}>
      <StyledSVG
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke={color}
          strokeWidth="8"
          delay={0}
        />
        <Circle cx="50" cy="25" r="10" fill={color} delay={0.5} />
        <Circle cx="75" cy="50" r="10" fill={color} delay={1} />
        <Circle cx="50" cy="75" r="10" fill={color} delay={1.5} />
        <Circle cx="25" cy="50" r="10" fill={color} delay={2} />
      </StyledSVG>
    </IconWrapper>
  );
}
