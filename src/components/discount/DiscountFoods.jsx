import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";
import { useEffect, useState } from "react";

const DiscountFoods = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("/discount.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        Discount Food Items
      </h1>
      <div className="relative w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {products?.map((product) => (
            <SwiperSlide key={product?._id}>
              {/* Content for each product slide */}
              <div className="product-slide">
                <img
                  src={product?.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-md"
                />
                <h3 className="text-center mt-2 text-lg font-semibold text-[#FF5722]  ">
                  {product?.name}
                </h3>
                <p className="text-center text-sm text-[#FFC107]">
                  Discount: {product?.discount}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountFoods;
