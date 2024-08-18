import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSection = () => {
  return (
    <div className="mb-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.postimg.cc/tC68tQ11/pexels-soumil-kumar-4325-735911.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-2xl   lg:text-5xl font-bold mb-5 text-[#F9DBBA]">
                Welcome To CAMPER SHOP
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-[#5B99C2] mb-5">
                Your Adventure Awaits. Explore the Outdoors with Quality Gear.
                Discover the Freedom of Nature, One Product at a Time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.postimg.cc/kG0FXH9z/pexels-thngocbich-1714341.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-2xl   lg:text-5xl font-bold mb-5 text-[#F9DBBA]">
                Welcome To CAMPER SHOP
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-[#5B99C2] mb-5">
                Your Adventure Awaits. Explore the Outdoors with Quality Gear.
                Discover the Freedom of Nature, One Product at a Time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.postimg.cc/V6HW26hY/pexels-tanasovich-2588757.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-2xl   lg:text-5xl font-bold mb-5 text-[#F9DBBA]">
                Welcome To CAMPER SHOP
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-[#5B99C2] mb-5">
                Your Adventure Awaits. Explore the Outdoors with Quality Gear.
                Discover the Freedom of Nature, One Product at a Time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.postimg.cc/YC18jtv3/pexels-lalorosas-968631.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-2xl   lg:text-5xl font-bold mb-5 text-[#F9DBBA]">
                Welcome To CAMPER SHOP
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-[#5B99C2] mb-5">
                Your Adventure Awaits. Explore the Outdoors with Quality Gear.
                Discover the Freedom of Nature, One Product at a Time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.postimg.cc/XNpRqy4k/pexels-athena-2582932.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-2xl   lg:text-5xl font-bold mb-5 text-[#F9DBBA]">
                Welcome To CAMPER SHOP
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-[#5B99C2] mb-5">
                Your Adventure Awaits. Explore the Outdoors with Quality Gear.
                Discover the Freedom of Nature, One Product at a Time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.postimg.cc/tJZNbb0F/pexels-pixabay-39284.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-2xl   lg:text-5xl font-bold mb-5 text-[#F9DBBA]">
                Welcome To CAMPER SHOP
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-[#5B99C2] mb-5">
                Your Adventure Awaits. Explore the Outdoors with Quality Gear.
                Discover the Freedom of Nature, One Product at a Time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.postimg.cc/ZY21dKqt/pexels-pixabay-159235.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-2xl   lg:text-5xl font-bold mb-5 text-[#F9DBBA]">
                Welcome To CAMPER SHOP
              </h1>
              <p className="text-xl lg:text-3xl font-semibold text-[#5B99C2] mb-5">
                Your Adventure Awaits. Explore the Outdoors with Quality Gear.
                Discover the Freedom of Nature, One Product at a Time.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
