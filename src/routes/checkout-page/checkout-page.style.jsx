import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutBlock = styled.div`
  font-size: 18px;
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 30px;
`;
