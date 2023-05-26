import SectionTitle from "../../../component/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="container mx-auto px-10">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            >
            </SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide

                            key={review._id}
                            reviews={review}
                        >
                            <div className="flex flex-col justify-center items-center py-10 md:px-32 space-y-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img className="w-16 md:w-32" src="https://i.ibb.co/GCYPSQh/25672.png" alt="" />
                                <p className="text-sm md:text-base">{review.details}</p>
                                <h2 className=" text-xl md:text-3xl text-[#CD9003]">{review.name}</h2>
                            </div>
                        </SwiperSlide>
                        )}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;