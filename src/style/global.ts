import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root{
        //! Colors
        --green-500: green;

        --red-500: #F35F5F;

        --yellow-500: #FFC01D;
        
        --blue-200: #D3F0F8;
        --blue-500: blue;

        --grey-700: #414141;
        --grey-200: #535353;

        --background-color: #F5F5F5; //? Change Later
        //* Ligth = F5F5F5
        //* Dark = 242424
        
        --text-color: var(--grey-200);

        //! Variables
        --border-radius: 1.25rem;

        --max-width: 62.5rem;
        --padding: 0 20px;

        --desktop-breakpoint: 64rem; //1024px
        --tablet-breakpoint: 48rem; //768px
    }

    html {
        /*
            ? Para melhorar a acessibilidade, variando as fontes consoante o usuario
            * font-size normal: 16px
         */ 
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background-color: var(--background-color);
        -webkit-font-smoothing: antialiased; //Fontes mais nítidas
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;
    }

    button {
        cursor: pointer;
        border: none;
    }

`