import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from '../../../components/FoodCard/FoodCard';

import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (


    <div>
      <div >


        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>

            <div className='grid md:grid-cols-3 gap-10 md:mb-20 md:mt-20'>

              {
                items.map(item => <FoodCard
                  key={item._id}
                  item={item}>

                </FoodCard>)
              }
            </div>

          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default OrderTab;