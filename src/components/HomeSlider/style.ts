import styled from "styled-components";

export const Div = styled.div`
    cursor: pointer;

    width: 300px;
    height: 400px;

    position: relative;
`

export const Img = styled.img`
    height: 100%;
`

export const MangaTittle = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;

    padding: 5px;
    
    width: 200px;
    
    background-color: var(--background-color);
    border-radius: 5px;
    color: var(--red);
    
    > div {
        text-align: center;
    }
`
