import Slider from "./Slider";
import banner from '../assets/banner.jpg';
import JobByCategory from "../JobByCategory/JobByCategory";
import UserReview from "./UserReview";

const HomePage = () => {
    return (
        <div>
            <div className='bg-[#244034]'>
                <div className="max-w-[1170px] mx-auto pt-5">
                    <div className='bg-cover bg-center h-[500px] rounded-2xl' style={{ backgroundImage: `url(${banner})` }}>
                        <div className="absolute h-[500px] w-[1170px] bg-black opacity-50 rounded-2xl"></div>
                        <Slider></Slider>
                    </div>
                    <div className='h-[50px]'></div>
                </div>
            </div>
            <div className="max-w-[1170px] mx-auto pt-5">
                <UserReview></UserReview>
                <JobByCategory></JobByCategory>
            </div>
        </div>
    );
};

export default HomePage;