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

            color: var(--red-500);

            padding: 1rem 0;
        }

        p {
            width: 100%;
            font-weight: 500;
            font-size: 1.3rem;
            text-align: left;

            span{
                font-size: 1rem;
                font-weight: normal;
                color: var(--grey-200)
            }

            span.ongoing {
                color: var(--blue-500);
            }

            span.hiatus {
                color: var(--yellow-500);
            }

            span.completed {
                color: var(--green-500);
            }

            span.cancelled {
                color: var(--red-500);
            }
            
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