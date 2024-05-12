
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r2.jpg';
import r6 from '../assets/r6.jpg';

import { motion } from "framer-motion"

const Review = () => {
    return (
        <div className="mt-20">
            <div className='flex flex-col justify-center items-center mb-10 ml-5 md:ml-0'>
                <h2 className='text-4xl font-bold'>Trusted User Reviews</h2>
                <p className='text-xl font-medium mt-5 text-slate-500'>Embark on your career journey with Job Voyage Explore our Trusted User Reviews</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20 lg:ml-0'>


                <motion.div drag>
                    <div className="card bg-black bg-opacity-50 shadow-xl text-stone-900 w-[340px]">
                        <figure className='w-[340px] h-[400px]'><img src={r1} alt="Shoes" className='w-[340px]' /></figure>

                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold p-1">
                                Name: John Damian

                            </h2>
                            <div className="card-actions">
                                <div className="badge badge-outline text-xl p-4 font-semibold">Rating: ⭐⭐⭐⭐</div>
                            </div>
                            <p className='bg-stone-900 bg-opacity-50 text-zinc-400 p-4 rounded-3xl mt-3'>JobVoyage is a great tool for job seekers. It offers a wide range of job listings and the search filters are very helpful. Ive been able to apply to several promising positions thanks to JobVoyage.</p>

                        </div>
                    </div>
                </motion.div>


                <motion.div drag>
                    <div className="card bg-black bg-opacity-50 shadow-xl text-stone-900 w-[340px]">
                        <figure className='w-[340px] h-[400px]'><img src={r6} alt="Shoes" className='w-[340px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold p-1">
                                Name: Sarah Smith

                            </h2>
                            <div className="card-actions">
                                <div className="badge badge-outline text-xl p-4 font-semibold">Rating: ⭐⭐⭐⭐⭐</div>
                            </div>
                            <p className='bg-stone-900 bg-opacity-50 text-zinc-400 p-4 rounded-3xl mt-3'>JobVoayage made my job search so much easier with its intuitive interface and extensive job listings. I found my dream job within days of using the platform. Highly recommend!</p>

                        </div>
                    </div>
                </motion.div>




                <motion.div drag>
                    <div className="card bg-black bg-opacity-50 shadow-xl text-stone-900 w-[340px]">
                        <figure className='w-[340px] h-[400px]'><img src={r2} alt="Shoes" className='w-[340px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold p-1">
                                Name: Emil Johnson

                            </h2>
                            <div className="card-actions">
                                <div className="badge badge-outline text-xl p-4 font-semibold">Rating: ⭐⭐⭐⭐</div>
                            </div>
                            <p className='bg-stone-900 bg-opacity-50 text-zinc-400 p-4 rounded-3xl mt-3'>I love JobVoyage! Its user-friendly and provides personalized job recommendations based on my skills and preferences. The job alerts keep me updated. Highly recommend!</p>

                        </div>
                    </div>
                </motion.div>



            </div>
        </div >
    );
};

export default Review;