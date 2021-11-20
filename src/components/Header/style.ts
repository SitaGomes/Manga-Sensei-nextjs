import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: auto;

    background-color: var(--grey-700);
`

export const NavContainer = styled.nav`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media screen and (min-width: 48em) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 64em) {
        max-width: 1000px; 
        margin: 0 auto;
    }

` 

export const Logo = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: var(--red-500);

    text-align: center;

    cursor: pointer;

`


export const InputContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    
    > input{
        width: 100%;
        text-align: center;
        border: none;
        border-radius: var(--border-radius) 0 0 var(--border-radius);

    }

    > span{
        background: var(--red-500);
        border-radius: 0 20px 20px 0;
        padding: 5px 10px;
    }

`

