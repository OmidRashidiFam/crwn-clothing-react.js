import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

export const ShopingBagIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

export const ShopingIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export const ShopingBagIconCounter = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
`;
