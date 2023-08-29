import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import styles from './weatherUpdates.module.scss';
import 'swiper/scss';
import WeatherShapshot from '@components/WeatherShapshot';

const WeatherUpdates = ({ hourlyForecast, scale }) => {
  const parameters = {
    spaceBetween: 50,
    direction: 'horizontal',
    mousewheel: true,
    modules: [Mousewheel],
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      560: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className={styles.updates}>
      <Swiper {...parameters}>
        {hourlyForecast.map((el, index) => {
          return (
            <SwiperSlide key={index} className={styles.slide}>
              <WeatherShapshot {...el} scale={scale} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WeatherUpdates;
