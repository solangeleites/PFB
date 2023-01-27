import styled from "styled-components";
import {mobile, tablet} from '../../media/queries';
export const FooterContainer = styled.footer`
    padding: 3rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-top: 1px solid #D1D1D1;
    width: 100%;
    height: 100%;
    gap: 10rem;

    ${mobile}{
        flex-direction: column;
        gap: 2rem;
    }
`
export const  FooterContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    & p{
        font-size: 14px;
        cursor: pointer;
    }
`
export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;`
    export const ContainerSocial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & span{
        cursor: pointer;
        font-size: 20px;
    }
    `
    export const FooterContainerTextLast = styled.div`
        padding: 10px;
    `
