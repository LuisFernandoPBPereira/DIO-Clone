import styled from "styled-components";

interface IColumn{
    flex: number
}

export const Feed = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: white;
    margin-bottom: 24px;
`

export const TitleHighlight = styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`

export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`