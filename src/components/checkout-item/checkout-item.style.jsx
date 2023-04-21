import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;

  button {
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 75%;
    height: 75%;
  }
`;

export const Name = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  width: 23%;
  font-size: 18px;
  display: flex;
`;

export const Price = styled.span`
  width: 23%;
  font-size: 18px;
`;

export const Value = styled.span`
  margin: 0px 10px 5px;
`;

export const RemoveButton = styled.div`
  width: 8%;
  padding-left: 12px;
`;
