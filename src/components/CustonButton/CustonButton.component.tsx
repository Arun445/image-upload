import React from "react";
import { Button } from "./custom-button.styles";

type MyProps = {
  children?: React.ReactNode;
  type?: "submit" | "button";
  onClicks?: any;
  btnColor?: string;
};

const CustomButton: React.FC<MyProps> = ({
  children,
  type,
  onClicks,
  btnColor,
}) => (
  <Button type={type} onClick={onClicks} btnColor={btnColor}>
    {children}
  </Button>
);

export default CustomButton;
