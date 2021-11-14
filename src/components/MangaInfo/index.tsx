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
                <p><span>Status: </span> {status}</p>
                <p><span>Year of release: </span> {yearOfRelease ? yearOfRelease : "unknown"}</p>
                <p><span>Last volume </span> {lastVolume ?lastVolume : "unknown"}</p>
                <p><span>Last chapter: </span> {lastChapter ? lastChapter : "unknown"}</p>
                <p><span>Description:</span> {description}</p>
            </div>

        </Container>
    )
}
