import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import styles from './weatherUpdates.module.scss';
import 'swiper/scss';
import WeatherShapshot from '@components/WeatherShapshot';

const WeatherUpdates = ({ hourlyForecast, scale }) => {
  return (
    <div className={styles.updates}>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        direction={'horizontal'}
        mousewheel={true}
        modules={[Mousewheel]}
      >
        {hourlyForecast.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <WeatherShapshot {...el} scale={scale} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WeatherUpdates;
