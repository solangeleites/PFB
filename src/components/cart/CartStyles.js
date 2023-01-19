import styled from 'styled-components';
import {mobile, tablet} from '../../media/queries';

export const CartContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  border: 1px solid black;
  padding: 10px 15px;
  background: transparent;
  cursor: pointer;
  margin-right: 110px;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>props.isCartOpen ? 'translateX(0%)' : 'translateX(200%)'};

  &:hover {
    background: black;
    transition: all 0.3s ease-in-out;
    color: white;
  }

  ${mobile} {
    margin-right: 110px;
  }
`;
