import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  height: min-content;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 26px;
  box-shadow: 1px 20px 20px 0px ${({ theme }) => theme.primary + 40};
  border: 1px solid ${({ theme }) => theme.primary};

  @media (max-width: 600px) {
    padding: 8px 12px;
  }
`;

const Button = ({ text, width, color, bgColor }) => {
  return (
    <>
      <CustomButton width={width} bgColor={bgColor} color={color}>
        {text}
      </CustomButton>
    </>
  );
};

export default Button;
