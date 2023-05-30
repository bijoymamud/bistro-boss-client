import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from '../../components/SectionTitle';

const Testimonials = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className="my-20 ">
      <SectionTitle
        subHeading="What Our Clients Opition"
        heading="TESTIMONIALS"
      >

      </SectionTitle>

      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:mt-32">

          {
            reviews.map(review => <SwiperSlide


              key={review._id}
              review={review}>

              <div className="text-center w-1/2 mx-auto ">
                <Rating className="mx-auto"
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-7xl mx-auto font-bold mt-5"></FaQuoteLeft>
                <p className="text-xl italic mt-2">{review.details}</p>
                <h3 className="text-2xl text-orange-500 font-bold mt-5">{review.name}</h3>
              </div>

            </SwiperSlide>)
          }
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;