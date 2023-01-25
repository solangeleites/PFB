import styled from "styled-components";

export const CartContainerHandler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const CartQuantity = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 3px 2px 8px;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
export const CartSpanState = styled.span`
  color: black;
`;
