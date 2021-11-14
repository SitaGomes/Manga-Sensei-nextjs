import React from 'react'

import { Lup } from 'components/Header/Lup'

import { 

    HeaderContainer,
    InputContainer,
    NavContainer, 
    Logo

} from 'components/Header/style'


export const Header: React.FC = () => {
    
    return (
        <HeaderContainer>
            <NavContainer>
                <Logo>
                    Manga Sensei
                </Logo>

                {/* Search Bar */}
                <InputContainer>

                    <input type="text" placeholder="Search Manga"/>

                    <span>
                        <Lup />
                    </span>

                </InputContainer>
            </NavContainer>
        </HeaderContainer>
    )
}
