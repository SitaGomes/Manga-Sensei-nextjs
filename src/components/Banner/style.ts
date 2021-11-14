import styled from "styled-components";


export const Div = styled.section`
    > img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;

        @media only screen and (min-width: 48em) {
            height: 500px;
        }
    }
`
