import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root{
        --red: #F35F5F;
        --yellow: #FFC01D;
        --light-blue: #D3F0F8;

        --grey1: #535353;
        --grey2: #A5A5A5;

        --background-color: #F5F5F5; //? Change Later
        
        --text-color: var(--grey2);
        --tittle-color: #161616; //? Change later

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

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
    }

    .pd-2 {
        padding: 20px;
    }
`