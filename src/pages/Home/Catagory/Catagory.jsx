import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";


const Catagory = () => {
  return (
    <section>
      <SectionTitle

        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}>

      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:mb-24 md:mt-20"
      >
        <SwiperSlide >
          <img src={img1} alt="" />
          <h2 className="text-3xl uppercase text-center -mt-24  text-white
           font-semibold">salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-3xl uppercase text-center -mt-24 text-white  font-semibold">Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-3xl uppercase text-center -mt-24 text-white  font-semibold">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-3xl uppercase text-center -mt-24 text-white  font-semibold">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-3xl uppercase text-center -mt-24 text-white  font-semibold">salads</h2>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default Catagory;