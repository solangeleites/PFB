import styled from 'styled-components';
import { Section } from '../globalComponents/GlobalComponents';
import { mobile, tablet } from '../../media/queries';
import { motion } from 'framer-motion';

export const ContainerPicture = styled(Section)`


    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    padding: 50px 0px;

    ${tablet}{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const CardPicture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 420px;
  height: 600px;
  border: 1px solid black;

  & img {
    object-fit: cover;
    width: 90%;
    height: 70%;
    border-radius: 5px;
  }

  & h2{
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  ${tablet} {
    width: 90%;
  }

  ${mobile} {
    text-align: center;
  }
`;
export const ButtonPicture = styled.button`
  padding: 10px 30px;
  border: 1px solid black;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #000;
      transition: all 0.5s ease-in-out;
      color: white;
    }
  }
`;
