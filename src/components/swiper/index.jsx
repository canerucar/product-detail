import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./index.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { getProductVariantsAsync } from '../../api/requests/index';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();
  const product = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductVariantsAsync());
  }, []);

  if (product.productImages == 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product?.productImages?.map((productVariant,index) =>
          <SwiperSlide key={index}>
            <img src={productVariant}/>
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product?.productImages?.map((productVariant, index) =>
          <SwiperSlide key={index}>
            <img src={productVariant}/>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
