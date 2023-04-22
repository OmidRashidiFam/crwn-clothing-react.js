import styled, { css } from "styled-components";
import FormInput from "./form-input.component";

const mainColor = "black";
const subColor = "gray";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 16px;
  color: ${mainColor};
`;

export const FormContainer = styled.div`
  position: relative;
  margin: 30px 0;

  input[type="password"] {
    letter-spacing: 0.25rem;
  }
`;

export const FormLable = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: whitesmoke;
  color: ${subColor};
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ FormLable {
    @include shrinkLabel();
  }
`;
