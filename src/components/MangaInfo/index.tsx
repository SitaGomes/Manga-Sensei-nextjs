import React from 'react'

import {Container} from "components/MangaInfo/style"

interface MangaInfoProps {
    mangaID: string,
    imageURl: string,
    title: string,
    description: string,
    yearOfRelease: number | null,
    lastVolume: string | null,
    lastChapter: string | null,
    status: string,
}

export const MangaInfo: React.FC<MangaInfoProps> = ({imageURl, mangaID, title, description, yearOfRelease, status, lastChapter, lastVolume}) => {

    const mangaBannerArt = `https://uploads.mangadex.org/covers/${mangaID}/${imageURl}`

    return (
        <Container>
            <img src={mangaBannerArt} alt={title} />
            
            <div>
                <h1>{title}</h1>



                <p>Status:  <span className={status}>{status}</span></p>
                <p>Year of release:  <span>{yearOfRelease ? yearOfRelease : "unknown"}</span></p>
                <p>Last volume  <span>{lastVolume ?lastVolume : "unknown"}</span></p>
                <p>Last chapter:  <span>{lastChapter ? lastChapter : "unknown"}</span></p>
                <p>Description: <span>{description?.split("\n")[0]}</span></p>
            </div>

        </Container>
    )
}
