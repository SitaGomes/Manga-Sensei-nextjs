import React from 'react'
import {Div} from 'components/Banner/style'

export const Banner: React.FC<{ fileName: string, mangaId: string }> = ({fileName, mangaId}) => {
    
    const getImageFromCloud = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`
    

    return (
        <Div>
           <img src={getImageFromCloud} alt="Manga banner images" />
        </Div>
    )
}
