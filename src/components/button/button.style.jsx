import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Asap Condensed", sans-serif;
  color: whitesmoke;
  background-color: black;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: whitesmoke;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignedInButton = styled(BaseButton)`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: whitesmoke;

  &:hover {
    background-color: #357ae8;
    border: none;
    border: 1px solid #357ae8;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: whitesmoke;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: whitesmoke;
    border: none;
  }
`;
