import { useEffect, useRef} from "react"



// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';


// import styles bundle
import 'swiper/css/bundle';
import SlideCard from "./cardComponent"


const Carrusel = ({ data, title }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 4,
      speed: 600,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },
    });

    // Función para actualizar la navegación
    const updateNavigation = () => {
      const nextButton = swiperRef.current.querySelector('.swiper-button-next');
      const prevButton = swiperRef.current.querySelector('.swiper-button-prev');

      if (swiper.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
      } else {
        nextButton.classList.remove('swiper-button-disabled');
      }

      if (swiper.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
      } else {
        prevButton.classList.remove('swiper-button-disabled');
      }
    };

    swiper.on('slideChange', updateNavigation);
    updateNavigation(); // Llama a la función al inicio

    return () => {
      swiper.off('slideChange', updateNavigation);
      swiper.destroy(); // Limpieza
    };
  }, []);

  return (
    <>
      <h3 className="title">{title}</h3>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {data.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <SlideCard 
                imgSrc={item.imgSrc}
                title={item.title}
                address={item.address}
                phone={item.phone}
                className={item.className}
              />
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  );
};

export default Carrusel;