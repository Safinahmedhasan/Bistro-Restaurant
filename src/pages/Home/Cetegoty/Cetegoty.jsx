// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const Cetegoty = () => {
    return (
        <div className="container mx-auto px-5">
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            >
            </SectionTitle>

            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" />
                    <h2 className="font-Cinzel text-3xl text-center -mt-14 text-white">Salads</h2>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />
                    <h2 className="font-Cinzel text-3xl text-center -mt-14 text-white">Soups</h2>
                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />
                    <h2 className="font-Cinzel text-3xl text-center -mt-14 text-white">pizzas</h2>
                </SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />
                    <h2 className="font-Cinzel text-3xl text-center -mt-14 text-white">desserts</h2>
                </SwiperSlide>
                <SwiperSlide><img src={img5} alt="" />
                    <h2 className="font-Cinzel text-3xl text-center -mt-14 text-white">Salads</h2>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Cetegoty;