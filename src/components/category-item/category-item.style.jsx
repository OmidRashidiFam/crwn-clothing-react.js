import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryCardIMG = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategoryCardBody = styled.div`
  height: 90px;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    margin: 0 10px 5px;
    color: #4a4a4a;
    font-size: 28px;
    font-weight: bolder;
  }

  p {
    margin: 10px 0 5px;
    font-weight: lighter;
    font-size: 18px;
  }
`;

export const CategoryCardContainer = styled(Link)`
  width: 30%;
  height: 330px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${CategoryCardIMG} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryCardBody} {
      opacity: 0.9;
    }
  }
`;
