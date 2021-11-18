export interface HomeProps {
    bannerArtData: {response:{data: Array<BannerArt>}},
    popularMangaData: {response:{data: Array<MostPopularManga>}},
    popularWebtoonData: {response:{data: Array<MostPopularWebtoon>}},
}

export interface MostPopularManga {

    id: string,

    attributes: {
        title: object
    },

    relationships: [
        {
            type: string,
            attributes: {
                fileName: string
            }
        },
        {
            type: string,
            attributes: {
                fileName: string
            }
        },
        {
            type: string,
            attributes: {
                fileName: string
            }
        },
    ]

}

export interface MostPopularWebtoon {

    id: string,

    attributes: {
        title: object
    },

    relationships: [
        {
            type: string,
            attributes: {
                fileName: string
            }
        },
        {
            type: string,
            attributes: {
                fileName: string
            }
        },
        {
            type: string,
            attributes: {
                fileName: string
            }
        },
        {
            type: string,
            attributes: {
                fileName: string
            }
        },
    ]

}

export interface BannerArt {
    attributes: {
        fileName: string,
    },
    relationships: [
        {
            id: string,
            type: string
        }
    ]
}