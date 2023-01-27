import styled from 'styled-components';
import { mobile, tablet, widescreen,  } from '../../media/queries';

export const ContainerIcon = styled.div`
  border: 1px solid #000;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin: 0px;
  &:hover {
    background-color: #000;
    transition: all 0.5s ease-in-out;
    color: white;
  }
  ${mobile} {
    margin: 0px;
    left: 40px;
  }
`;
export const ContainerProducts = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  z-index: 2;
  min-width: 375px;
  background-color: white;
  border-left: 1px solid  #EFEFEF;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.clicked ? 'translateX(0%)' : 'translateX(200%)'};

background-image: linear-gradient(to right top, #ffffff, #fcfcfc, #f9f9f9, #f6f6f6, #f3f3f3);

  &::-webkit-scrollbar {
    display: none;
  }
  ${tablet} {
    width: 100%;
    height: calc(100vw - 60px);
    z-index: 10;
    transition: all 0.5s ease-in-out;
    transform: ${(props) =>
      props.clicked ? 'translateX(0%)' : 'translateX(200%)'};
  }
  ${mobile} {
    width: 100%;
    border-bottom: 2px solid #000;
    border-left: none;
    height: calc(100vh - 60px);
  }
`;
export const CartTitle = styled.h2`
  color: black;
  font-size: 2rem;
  font-weight: 400;

  ${mobile} {
    font-size: 24px;
  }
`;

export const CartEmptyMsg = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
  position: absolute;


  ${mobile} {
    font-size: 18px;
  }
  ${tablet} {
    top: 10%;
  }
  ${widescreen}{
    top: 10%;
  }
`;
export const CartButton = styled.button`
  padding: 10px 35px;
  color: black;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #131415;
  transition: 0.3s all ease-out;
  width: 100%;
  cursor: pointer;
    &:hover {
    transition: 0.3s all ease-out;
    transform: scale(1.05);
  }
`;

export const CartButtonDelete = styled.button`
  padding: 10px 35px;
  color: black;
  border-radius: 10px;
  border: none;
  color: #131415;
  background-color: #fff;
  transition: 0.3s all ease-out;
  width: 100%;
  cursor: pointer;
  border: 1px solid #131415;


  &:hover {
    transition: 0.3s all ease-out;
    transform: scale(1.1);
  }
`;
