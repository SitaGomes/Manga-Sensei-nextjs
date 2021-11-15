import {useRouter} from "next/router"
import React, { useEffect, useState } from 'react'

import proxy from "services/proxy"

import HeadTag from 'next/head';

import { MangaInfo } from "components/MangaInfo"

interface MangaData {

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


export default function SingleManga () {

    const [mangaData, setMangaData] = useState<MangaData[]>([])
    const [imageUrl, setImageUrl] = useState("")
    
    const router = useRouter()
    const {id: mangaID} = router.query
    

    useEffect(() => {
        if (mangaID === undefined) {
            return
        }

        const getManga = async () => {
            try {

                const response = await proxy("single", {
                    method: "POST",
                    data: {
                        "mangaID": mangaID
                    }
                })
    
                setMangaData(response.data as MangaData[])

            } catch (err) {
                return
            }
            
        } 

        getManga()

    }, [mangaID])

    useEffect(() => {

        function getImageUrl() {
            mangaData.map((manga => {
                manga.relationships.map(child => {
                    
                    if (child.type === "cover_art") {
    
                        setImageUrl(child.attributes.fileName)
                    }
    
                })
            }))
        }

        getImageUrl()

    }, [mangaData])



    return (
        <main>
            {imageUrl.trim() === "" ? (<h1>Loading</h1>) : (
                <>
                    {mangaData.map((manga, index: number) => (
                
                        <section key={index}>
                            <HeadTag>
                                <title>{manga.attributes.title.en}</title>
                            </HeadTag>

                            <MangaInfo 
                                //imageURl={manga.relationships[2]?.attributes?.fileName !== undefined ? manga.relationships[2].attributes.fileName : manga.relationships[manga.relationships.length - 1].attributes.fileName}
                                imageURl={imageUrl}
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
                </>
            )}
            
        </main>
    )
}
