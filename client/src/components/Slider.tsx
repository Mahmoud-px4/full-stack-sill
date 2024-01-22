import React from 'react'
import styles from '../styles/slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import { EffectCoverflow} from 'swiper/modules';
// import 'swiper/css/effect-coverflow';


interface Configuration { 
    effect: string; 
    grabCursor: boolean; 
    centeredSlides: boolean;
    loop: boolean;
    slidesPerView: number | 'auto';
    spaceBetween: number;
    autoplay?: { 
        delay: number;
        disableOnInteraction: boolean;
    };
    pagination: {
        clickable: boolean
    };
    navigation: boolean;
    modules: any[];
    // coverflowEffect: { 
    //     rotate: number;
    //     stretch: number;
    //     depth: number;
    //     modifier: number;
    //     slideShadows: boolean;
    // };
}

interface prop{
    darkMode: boolean;
}


const Slider: React.FC<prop> = ({darkMode}) => {

    const configuration:Configuration = {
        effect:'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination:{
            clickable: true,
        },
        navigation: true,
        modules: [Pagination, Navigation, Autoplay],
        // coverflowEffect: {
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },        
        autoplay:{
          delay: 2500,
          disableOnInteraction: false,
        },
    }

  return (
    <>
        <div className={styles.section7}>
            <Swiper {...configuration} className={styles.mySwiper} style={darkMode ? {background: '#000807', color: 'white'} : {}}>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/16/17925673796039116/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/84/18168315778166784/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/4/17912803787077404/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/44/17888689763404344/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/84/18125008660215784/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/11/17924860849642211/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/184515632/medium_square.jpg?1626190267" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/184514118/medium_square.jpg?1626189645" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/27/18107805853237227/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/183292197/medium_square.jpg?1625172911" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/184516492/medium_square.jpg?1626190509" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/184513979/medium_square.jpg?1626189615" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/184514104/medium_square.jpg?1626189634" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/184514953/medium_square.jpg?1626189893" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/Account/748414/184513534/medium_square.jpg?1626189285" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/81/17913189073782281/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src="//cdn-yotpo-images-production.yotpo.com/instagram/45/17863624255881045/standard_resolution.jpg" alt='img' className={styles.img}/>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Slider