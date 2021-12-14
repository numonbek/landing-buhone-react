import React, { Component } from "react";
import { NextArrow } from "../../components/NextArrow";
import { PrevArrow } from "../../components/PrevArrow";
import { SectionSlider } from "../../components/sections/section-slider/SectionSlider";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  allowSlideNext,
  allowSlidePrev,
} from "swiper";

const HomePage = () => {
  const slideMassive = [
    {
      city: "Бухгалтерские услуги в Санкт-Петербурге",
      img: "https://i.pinimg.com/originals/37/28/04/372804976c5f498ba754ae1ac1394a52.jpg",
    },
    {
      city: "Бухгалтерские услуги в Москва",
      img: "https://vsthemes.org/uploads/posts/2018-01/1582030985_moscow_vsthemes_ru-27.jpg",
    },
    {
      city: "Бухгалтерские услуги в Краснодаре",
      img: "https://picworld.ru/wp-content/uploads/2016/10/Krasnodar_32.jpeg",
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "disable", // When the navigation button is not available, the Class is added, that is, when the Swiper index is 0, the last Class class name without prevel will add a disable, which is .swiper-button-prev .disable
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      // allowSlideNext={() => <NextArrow />}
      // allowSlidePrev={() => <PrevArrow />}
    >
      {slideMassive.map((el, inx) => {
        console.log("el", el);
        console.log("props");
        return (
          <div>
            <SwiperSlide>
              <SectionSlider img={el.img} text={el.city} />
            </SwiperSlide>
          </div>
        );
      })}
      <div className="container center">
        <div className="swiper-pagination"></div>
        <div className="container center">
          <div className="swiper-button-prev">
            <PrevArrow />
          </div>
          <div className="swiper-button-next">
            <NextArrow />
          </div>
        </div>
      </div>
    </Swiper>
  );
};
export default HomePage;
// const HomePage = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   const slideMassive = [
//     {
//       city: "Бухгалтерские услуги в Санкт-Петербурге",
//       img: "https://i.pinimg.com/originals/37/28/04/372804976c5f498ba754ae1ac1394a52.jpg",
//     },
//     {
//       city: "Бухгалтерские услуги в Москва",
//       img: "https://vsthemes.org/uploads/posts/2018-01/1582030985_moscow_vsthemes_ru-27.jpg",
//     },
//     {
//       city: "Бухгалтерские услуги в Краснодаре",
//       img: "https://picworld.ru/wp-content/uploads/2016/10/Krasnodar_32.jpeg",
//     },
//   ];

//   // next(){
//   //   this.slider.slickNext();
//   // };
//   // previous() {
//   //   this.slider.slickPrev();
//   // };
//   return (
//     <div>
//       <div>
//         <h2> Single Item</h2>

//         <Slider {...settings}>
//           {console.log()}
//           {slideMassive.map((el, inx) => {
//             console.log("el", el);
//             console.log("props");
//             return (
//               <div>
//                 <SectionSlider img={el.img} text={el.city} />
//               </div>
//             );
//           })}
//         </Slider>
//         {/* <div>
//           <button onClick={this.slickNext()}>adfasds</button>
//           <button onClick={this.slickPrev()}>adfasds</button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// export default class HomePage extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }

//   render() {
//     // const settings = {
//     //   dots: true,
//     //   infinite: true,
//     //   speed: 500,
//     //   slidesToShow: 1,
//     //   slidesToScroll: 1,
//     // };
//     const settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       // autoplay: true,
//       autoplaySpeed: 5000,
//       arrows: true,
//       fade: true,
//       cssEase: "linear",
//       nextArrow: <NextArrow />,
//       prevArrow: <PrevArrow />,
//       className: "slides",
//     };

//     const slideMassive = [
//       {
//         city: "Бухгалтерские услуги в Санкт-Петербурге",
//         img: "https://i.pinimg.com/originals/37/28/04/372804976c5f498ba754ae1ac1394a52.jpg",
//       },
//       {
//         city: "Бухгалтерские услуги в Москва",
//         img: "https://vsthemes.org/uploads/posts/2018-01/1582030985_moscow_vsthemes_ru-27.jpg",
//       },
//       {
//         city: "Бухгалтерские услуги в Краснодаре",
//         img: "https://picworld.ru/wp-content/uploads/2016/10/Krasnodar_32.jpeg",
//       },
//     ];

//     return (
//       <div>
//         <Slider {...settings}>
//           {slideMassive.map((el, inx) => {
//             return (
//               <div>
//                 <SectionSlider img={el.img} text={el.city} />
//               </div>
//             );
//           })}
//         </Slider>
//         {/* <div style={{ textAlign: "center" }}>
//           <NextArrow onClick={this.next} />

//           <PrevArrow onClick={this.previous} />
//         </div> */}
//       </div>
//     );
//   }
// }
