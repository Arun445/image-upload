import React from "react";
import { ErrorMessageContainer } from "./error-message.styles";

type MyProps = {
  children?: React.ReactNode;
};

function ErrorMessage(props: MyProps) {
  const { children } = props;
  return <ErrorMessageContainer>{children}</ErrorMessageContainer>;
}

export default ErrorMessage;
