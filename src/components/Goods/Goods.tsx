import { GoodCard } from '../GoodCard';
import './Goods.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

import photoGood_1 from '../../img/photo-1.png';
import photoGood_2 from '../../img/photo-2.png';
import photoGood_3 from '../../img/photo-3.png';

export const Goods = () => {
  const flag = true;
  
  return (
    <section className="goods goods--margin-bottom">
      <h2 className="goods__title">
        <span className="goods__title-first-word">
          Популярные
        </span> 
        товары
      </h2>

      <div className="goods__cards-box">
        <Swiper
          modules={[Navigation]}
          navigation={flag}
          loop={flag}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 480: { slidesPerView: 3 } }}
        >
          <SwiperSlide>
            <GoodCard photo={photoGood_1} />
          </SwiperSlide>

          <SwiperSlide>
            <GoodCard photo={photoGood_2} />
          </SwiperSlide>

          <SwiperSlide>
            <GoodCard photo={photoGood_3} />
          </SwiperSlide>

          <SwiperSlide>
            <GoodCard photo={photoGood_1} />
          </SwiperSlide>

          <SwiperSlide>
            <GoodCard photo={photoGood_2} />
          </SwiperSlide>

          <SwiperSlide>
            <GoodCard photo={photoGood_3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}