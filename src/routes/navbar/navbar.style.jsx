import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 75px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`;

export const NavbarLogoContainer = styled(Link)`
  width: 75px;
  height: 100%;
  padding: 25px;
`;

export const NavbarLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavbarLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
