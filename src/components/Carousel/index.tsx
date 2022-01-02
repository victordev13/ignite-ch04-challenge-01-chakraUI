import { Box, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation={true}
        className="mySwiper"
        pagination>
        <SwiperSlide>
          <Image src="/airplane.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/airplane.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/airplane.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
