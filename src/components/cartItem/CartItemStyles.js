import styled from "styled-components";
import {mobile} from '../../media/queries'

export const CartContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${mobile} {
    justify-content: center;
    align-items: center;
  }
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border: 1px solid black;
  max-width: 400px;

  & img {
    height: 70px;
    width: 70px;
    object-fit: cover;
  }
  ${mobile} {
    max-width: 330px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const CartContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  text-align: center;
`;
export const CartItemTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;
export const CartItemPrice = styled.p`
  background: linear-gradient(to right, black, grey);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  font-size: 16px;
  font-weight: 800;
`;


export const Divider = styled.div`
  margin-top: 20px;
  border: 0.5px solid black;
  width: 100%;
`;
export const CartContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

export const CartTotal = styled.p`
  font-weight: 700;
`;
export const CartTotalPrice = styled.span`
  font-weight: 400;
  font-size: 18px;
`;

