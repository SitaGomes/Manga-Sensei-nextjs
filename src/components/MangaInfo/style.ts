import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


    > img {
        object-fit: cover;
    }

    > div {
        padding: 0 0.5rem;
        
        h1 {
            text-align: center;
            font-size: 1.5rem; 
            font-weight: bold;

            color: var(--red);

            padding: 1rem 0;
        }

        p {
            width: 100%;
            span{
                font-weight: 500;
                font-size: 1.3rem;
            }
            text-align: left;
        }
    }

    @media screen and (min-width: 48em) {
        max-width: 1000px;
        flex-direction: row;
        align-items: center;

        margin: 0 auto;

        gap: 1rem;

        > img {
            width: 600px;
            height: 600px;
        }

        > div {
            h1 {
                text-align: left;
                padding: 0;
                font-size: 2rem;
            }
        }
    }

`