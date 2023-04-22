import styled from "styled-components";

import {
  BaseButton,
  GoogleSignedInButton,
  InvertedButton,
} from "../button/button.style";

export const DropdownContainer = styled.div`
  width: 300px;
  height: 400px;
  padding: 20px;
  position: absolute;
  top: 120px;
  right: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignedInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const DropdownItems = styled.div`
  height: 299px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto auto;
`;
