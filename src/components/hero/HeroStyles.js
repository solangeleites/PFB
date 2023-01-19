import styled from 'styled-components';
import { Section } from '../globalComponents/GlobalComponents';
import { mobile, tablet } from '../../media/queries';

export const HeroContainer = styled(Section)`
    display: flex;
    flex-direction:row;
    justify-content: space-around;    
    align-items: center;
    height: 100vh;
    width: 100%;

    ${mobile}{
        flex-direction: column;
    }

`
export const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 100%;

    ${tablet}{
        width: 100%;
        height: 100%;
        text-align:center;
    }
`
export const HeroImage = styled.div`
    width: 45%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        ${tablet}{
            width: 80%;
        }
    }

    ${tablet}{
        width: 100%;
        height: 100%;
    }
`
export const HeroTitle = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    text-align: center;

    ${tablet}{
        font-size: 2rem;
        width: 100%;
        height: 100%;
        text-align:center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


    }
    
`