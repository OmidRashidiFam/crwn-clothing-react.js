import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  margin-bottom: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid darkgrey;

  h2 {
    margin: 20px 0 30px 0;
  }
`;

export const CategoryTitle = styled(Link)`
  font-size: 35px;
  cursor: pointer;
`;

export const PreviewItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;
