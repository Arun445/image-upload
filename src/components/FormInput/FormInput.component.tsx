import React from "react";
import { FormInputContainer, Label, Input } from "./form-input.styles";

interface FormInputProps {
  type: string;
  required: boolean;
  label: string;
  defaultValue?: string;
}

function FormInput(props: FormInputProps) {
  const { type, required, label, defaultValue } = props;
  return (
    <FormInputContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        required={required}
        defaultValue={defaultValue}
      ></Input>
    </FormInputContainer>
  );
}

export default FormInput;
