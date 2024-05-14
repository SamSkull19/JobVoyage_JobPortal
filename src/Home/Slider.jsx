import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';

import '../App.css'
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='roboto'>

            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    effect: "fade"
                }}

            >
                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={s1} className="w-[340px] h-[200px] md:w-[600px] md:h-[400px] rounded-2xl mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-40" />
                        <div className='w-[340px] md:w-[600px] bg-[#244034] bg-opacity-65 p-8 rounded-xl mb-8 md:mb-0 absolute ml-0 md:ml-20 lg:ml-[450px] mt-52 md:mt-0 z-20'>
                            <h2 className='text-2xl md:text-4xl font-bold text-lime-500 mb-5'>
                            Software Engineer
                            </h2>
                            <p className='text-lg font-medium text-yellow-100'>Join our team at our headquarters and work on cutting-edge projects in a collaborative environment.</p>

                            <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Apply Now !</Link></button>
                        </div>
                    </div>

                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={s2} className="w-[340px] h-[200px] md:w-[600px] md:h-[400px] rounded-2xl mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-40" />
                        <div className='w-[340px] md:w-[600px] bg-[#244034] bg-opacity-65 p-8 rounded-xl mb-8 md:mb-0 absolute ml-0 md:ml-20 lg:ml-[450px] mt-52 md:mt-0'>
                            <h2 className='text-2xl md:text-4xl font-bold text-lime-500 mb-5'>
                            Content Writer
                            </h2>
                            <p className='text-lg font-medium text-yellow-100'>Work remotely from anywhere in the world, crafting engaging content and contributing to our digital marketing efforts.</p>

                            <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Apply Now !</Link></button>
                        </div>
                    </div>

                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="w-full h-[550px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center">

                        <img src={s3} className="w-[340px] h-[200px] md:w-[600px] md:h-[400px] rounded-2xl mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-40" />
                        <div className='w-[340px] md:w-[600px] bg-[#244034] bg-opacity-65 p-8 rounded-xl mb-8 md:mb-0 absolute ml-0 md:ml-20 lg:ml-[450px] mt-52 md:mt-0'>
                            <h2 className='text-2xl md:text-4xl font-bold text-lime-500 mb-5'>
                            Marketing Specialist
                            </h2>
                            <p className='text-lg font-medium text-yellow-100'>Enjoy the best of both worlds with a hybrid role, combining remote work flexibility with occasional in-person collaboration at our office.</p>

                            <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Apply Now !</Link></button>
                        </div>
                    </div>

                </SwiperSlide>
                


                
            </Swiper>

        </div>

    );
};

export default Slider;