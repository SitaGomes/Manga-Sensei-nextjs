import Link from 'next/link'
import React from 'react'

import {

    Div,
    Img,
    MangaTittle

} from 'components/HomeSlider/style'

interface MangaSliderProps {
    tittle: Object,
    id: string,
    fileName: string,
}

export const HomeSlider: React.FC<MangaSliderProps> = ({tittle, id, fileName}) => {

    const getImageFromCloud = `https://uploads.mangadex.org/covers/${id}/${fileName}`

    return (
        <Link href={`manga/${id}`} >
            
            <Div>
                <Img src={getImageFromCloud} />
                
                <MangaTittle>
                    {Object.entries(tittle).map((values, index) => (
                        <div
                            key={index}
                        >
                            {values[1]}
                        </div>
                    ))}
                </MangaTittle>
            </Div>

        </Link>
    )
}
