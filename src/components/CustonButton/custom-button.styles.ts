import styled from "styled-components";

interface ButtonProps {
  btnColor?: string;
}

export const Button = styled.button<ButtonProps>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: ${({ btnColor }) => (btnColor ? btnColor : "black")};
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
