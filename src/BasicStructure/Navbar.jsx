import { CgWorkAlt } from "react-icons/cg";
import { Link } from "react-router-dom";


const Navbar = () => {


    return (
        <div className="roboto">
            <div className="navbar bg-[#244034] bg-opacity-0 pt-5">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-lime-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52 bg-lime-900 bg-opacity-80 text-lime-100">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>All Jobs</Link></li>
                            <li><Link to='/'>Applied Jobs</Link></li>
                            <li><Link to='/'>Add A Job</Link></li>
                            <li><Link to='/'>My Jobs</Link></li>
                            <li><Link to='/'>Blogs</Link></li>
                            {/* {
                                user && <>
                                    <li><Link to=''>My Jobs</Link></li>
                                </>
                            } */}

                        </ul>
                    </div>


                    <a className="text-2xl font-bold flex items-center animate__animated animate__rubberBand text-lime-300">JobVoyage <CgWorkAlt className="ml-2" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lime-100 text-base font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>All Jobs</Link></li>
                        <li><Link to='/'>Applied Jobs</Link></li>
                        <li><Link to='/'>Add A Job</Link></li>
                        <li><Link to='/'>My Jobs</Link></li>
                        <li><Link to='/'>Blogs</Link></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>

                        <div className="flex gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt='...' src="..." />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content rounded-box w-52 text-lime-100 bg-lime-900 bg-opacity-80">
                                    <li>
                                        <a>Samin</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;