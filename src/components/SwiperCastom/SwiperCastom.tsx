import { useRef } from "react";
import Event from "./Event/Event";
import { CSSTransition } from "react-transition-group";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IEvents } from "../../types/IEventByYear";
import { NavigationOptions, Swiper as SwiperTypes } from "swiper/types";
import styles from "./Swiper.module.scss";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

interface SwiperCastomProps {
  event: IEvents[];
  page: number;
}

const SwiperCastom = ({ event, page }: SwiperCastomProps): JSX.Element => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<HTMLElement & SwiperTypes>();

  return (
    <div className={styles.swiperConteiner}>
      <CSSTransition
        nodeRef={swiperRef}
        in={true}
        appear={true}
        timeout={500}
        classNames="anim"
        key={page}
      >
        <div ref={swiperRef} key={page}>
          <Swiper
            breakpoints={{
              0: { spaceBetween: 10, slidesPerView: 1.4 },
              769: { spaceBetween: 20, slidesPerView: 2 },
              1024: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={swiper => {
              setTimeout(() => {
                const navigation = swiper.params
                  .navigation as NavigationOptions;
                navigation.nextEl = navigationNextRef.current;
                navigation.prevEl = navigationPrevRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            grabCursor
            freeMode={true}
            modules={[FreeMode, Navigation]}
            className={styles.swiperConteiner}
          >
            {event.map(
              (e): JSX.Element => (
                <SwiperSlide key={e.year}>
                  <Event props={e as IEvents} />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </CSSTransition>
      <button className={styles.buttonPrev} ref={navigationPrevRef}></button>
      <button className={styles.buttonNext} ref={navigationNextRef}></button>
    </div>
  );
};

export default SwiperCastom;
