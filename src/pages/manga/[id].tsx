import React, { useEffect, useState } from 'react'

import { GetServerSideProps } from "next";
import Header from 'next/head';

import proxy from "services/proxy"

import { MangaInfo } from "components/MangaInfo"

type MangaData = {

    id: string,
    attributes: {
        title: {
            en: string
        },
        description: {
            en: string
        },
        lastVolume: string | null,
        lastChapter: string | null,
        status: string,
        year: number | null,
        tags: [{
            id: string,
            attributes: {
                en: string
            }
        }],
        createdAt: string,
        updatedAt: string
    },
    relationships: [
        {
            type: string,
            attributes: {
                fileName: string
            }
        }
    ]
}

interface SingleMangaProps {
    mangaData: MangaData[]
}


export default function SingleManga ({mangaData}: SingleMangaProps) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (mangaData.length > 0) {
            setLoading(false)
        }

    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <main>
            {mangaData.map((manga, index: number) => (
                    
                <section key={index}>
                    <Header>
                        <title>{manga.attributes.title.en} | Manga Sensei</title>
                    </Header>

                    <MangaInfo 
                        //imageURl={manga.relationships[2]?.attributes?.fileName !== undefined ? manga.relationships[2].attributes.fileName : manga.relationships[manga.relationships.length - 1].attributes.fileName}
                        imageURl={manga.relationships.find(child => child.type === "cover_art").attributes.fileName}
                        title={manga.attributes.title.en}
                        mangaID={manga.id}
                        description={manga.attributes.description.en}
                        yearOfRelease={manga.attributes.year}
                        status={manga.attributes.status}
                        lastChapter={manga.attributes.lastChapter}
                        lastVolume={manga.attributes.lastVolume}
                    />
                </section>
            ))}
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id} = context.params

    const response = await proxy("single", {
        method: "POST",
        data: {
            "mangaID": id
        }
    })
    
    const mangaData = response.data 
  
    return{
        props: {mangaData},
    }
}