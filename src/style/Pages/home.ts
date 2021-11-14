import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;

    @media only screen and (min-width: 48em) {
        max-width: 1000px;
        width: 100%;

        margin: 0 auto;
    }
`

export const SliderContainer = styled.section`
    position: relative;
    overflow: hidden;

    max-height: 500px;
    height: 100%;

`

export const SliderButtonLeft = styled.button`
    border: none;
    background: none;

    position: absolute;
    top: 50%;
    left: 5px;

    z-index: 10;
    cursor: pointer;
    user-select: none;

`

export const SliderButtonRight = styled.button`
    border: none;
    background: none;

    position: absolute;
    top: 50%;
    right: 5px;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`

