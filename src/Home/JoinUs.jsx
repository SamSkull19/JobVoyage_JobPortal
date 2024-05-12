import { Link } from 'react-router-dom';
import stat1 from '../assets/stat1.jpg';
import stat2 from '../assets/stat2.jpg';
import stat3 from '../assets/stat3.jpg';
import stat4 from '../assets/stat4.jpg';
import stat5 from '../assets/stat5.jpg';
import stat6 from '../assets/stat6.jpg';
import { motion } from "framer-motion"

const JoinUs = () => {
    return (
        <div className='mt-16'>
            <div className='flex flex-col justify-center items-center mb-10 ml-5 md:ml-0'>
                <h2 className='text-4xl font-bold'>Join With Us</h2>
                <p className='text-xl font-medium mt-5 text-slate-500'>Embark on your career journey with Job Voyage - Join us today!</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 lg:ml-0'>

                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat1} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">4 Million</h2>
                            <p className='text-2xl text-stone-300'>4 million daily active users!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>

                </motion.div>

                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat2} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">12k Positions</h2>
                            <p className='text-2xl text-stone-300'>Over 12k open job positions</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat3} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">20 Million</h2>
                            <p className='text-2xl text-stone-300'>Over 20 million stories shared</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat4} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">Expert Skills</h2>
                            <p className='text-2xl text-stone-300'>Over 5 million Expert People</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat5} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">Experience</h2>
                            <p className='text-2xl text-stone-300'>Gain Experience From Experts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div drag>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={stat6} alt="..." /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl font-bold text-orange-300">Adaptability</h2>
                            <p className='text-2xl text-stone-300'>Demonstrate adaptability</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline outline-lime-600 mt-5 text-lime-500"><Link to='/allJobs'>Join Now !</Link></button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>


        </div>
    );
};

export default JoinUs;