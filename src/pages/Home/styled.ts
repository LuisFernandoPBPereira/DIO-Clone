import styled from "styled-components";

export const Home = styled.main`
    width: 100%;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .startNow{
        width: 20%;
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 950px){
        flex-wrap: wrap;

        img{
            width: 320px;
        }

        .startNow{
            width: 90%;
            text-align: center;
        }
    }
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
    color: white;
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 50vh;
    margin-bottom: 20px;
    line-height: 22px;
    color: white;
`