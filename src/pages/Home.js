import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function Home() {
    return (
        <main className='py-5'>
            <Container>
                <div className='position-relative mb-5'>
                    <Swiper
                        className='main-slider'
                        modules={[Navigation, Pagination, FreeMode]}
                        spaceBetween={50}
                        slidesPerView={'auto'}
                        navigation
                        freeMode={true}
                        pagination={{ clickable: true }}
                        >
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide1.png' alt='Подарки к 8 марта'/>
                                <figcaption>
                                    <h2>Подарки<br/> к 8 марта</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide2.png' alt='Подарки к Новому Году'/>
                                <figcaption>
                                    <h2>Подарки<br/> к Новому Году</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide1.png' alt='Подарки к 8 марта'/>
                                <figcaption>
                                    <h2>Подарки к 8 марта</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src='imgs/main-slider/slide2.png' alt='Подарки к Новому Году'/>
                                <figcaption>
                                    <h2>Подарки к Новому Году</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </main>
    );
}

export default Home;