import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

function Home() {
    return (
        <main className='py-5'>
            <Container>
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={50}
                    slidesPerView={'auto'}
                    >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>
            </Container>
        </main>
    );
}

export default Home;