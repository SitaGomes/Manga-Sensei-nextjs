//! React
import { useState } from 'react';

//! Next
import HeadTag from 'next/head';
import { GetServerSideProps, GetStaticProps } from 'next';

//! Axios
import proxy from "services/proxy"

//! Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, 
  A11y,
  EffectFade
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

//! Types
import { BannerArt, HomeProps, MostPopularManga, MostPopularWebtoon } from 'types';

//! Components
import {Banner} from "components/Banner"
import {HomeSlider} from "components/HomeSlider"

export default function Home({bannerArtData, popularMangaData, popularWebtoonData}: HomeProps) {
  

  const [bannerArt] = useState<BannerArt[]>(bannerArtData.response.data)
  const [popularManga] = useState<MostPopularManga[]>(popularMangaData.response.data)
  const [popularWebtoon] = useState<MostPopularWebtoon[]>(popularWebtoonData.response.data)

  SwiperCore.use([Navigation, A11y, EffectFade])


 const breakpoints = {
  768: {
    slidesPerView: 2,
  },
  1000: {
    sliderPerView: 3,
    spaceBetween: 20
  },
  1300: {
    slidesPerView: 4,
    spaceBetween: 25
  }  
 }

  return (
    <>
      <HeadTag>
        <title>Home | Manga Sensei</title>
      </HeadTag>
      
      <main>
        
        <section>
        
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={1}
            loop
            scrollbar={{ draggable: true }}
          >
          
              {bannerArt.map((banner, index: number) => (
                <SwiperSlide
                  key={index}
                > 
                  <Banner 
                      fileName={banner.attributes.fileName}
                      mangaId={banner.relationships.find(manga => manga.type === 'manga').id}
                    />
                </SwiperSlide>
              ))}
          
          </Swiper>
            
        </section>

        <section>
        
          <Swiper
            modules={[Navigation, A11y]}
            breakpoints={breakpoints}
            navigation
            scrollbar={{ draggable: true }}
          >
          
              {popularManga.map((manga, index: number) => (
                <SwiperSlide
                  key={index}
                > 
                  <HomeSlider 
                    fileName={manga.relationships.find(manga => manga.type === "cover_art").attributes.fileName}
                    id={manga.id}
                    tittle={manga.attributes.title}
                  />
                  {/* 
                    * [0, 1, 2] = values 3 in the array 
                    * If not in the second position
                    * Search on the last position
                  */}
                </SwiperSlide>
              ))}
          
          </Swiper>
            
        </section>

        <section>
        
          <Swiper
            modules={[Navigation, A11y]}
            breakpoints={breakpoints}
            navigation
            scrollbar={{ draggable: true }}
          >
          
              {popularWebtoon.map((manga, index: number) => (
                <SwiperSlide
                  key={index}
                > 
                  <HomeSlider 
                    fileName={manga.relationships.find(manga => manga.type === "cover_art").attributes.fileName}
                    id={manga.id}
                    tittle={manga.attributes.title}
                  />
                  {/* [0, 1, 2] = values 3 in the array */}
                </SwiperSlide>
              ))}
          
          </Swiper>
            
        </section>

      </main>
      
    </>
  )
}   


export const getServerSideProps: GetServerSideProps = async (context) => {

  const bannerArt = await proxy.get("cover")

  const popularManga = await proxy.get("manga/most-popular")

  const popularWebToons = await proxy.get("webtoon/most-popular")

  return{
    props: {
      bannerArtData: bannerArt.data,
      popularMangaData: popularManga.data,
      popularWebtoonData: popularWebToons.data,
    }
  }

}


