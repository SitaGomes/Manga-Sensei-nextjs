import React from 'react'
import Link from 'next/link'
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

                <Link href={"/"}>
                    <Logo>
                        Manga Sensei
                    </Logo>
                </Link>

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
