import { useContext, useEffect, useState } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [ theme, setTheme] = useState('light');

    useEffect( () => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleThemeToggle = e => {
        console.log(e.target.value);
        if(e.target.checked){
            setTheme('sunset');
        }
        else{
            setTheme('light')
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logged Out');
            })
            .catch(error => {
                console.log(error);
            })
    }

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
                            <li><Link to='/allJobs'>All Jobs</Link></li>
                            <li><Link to='/blog'>Blogs</Link></li>
                            {
                                user && <>
                                    <li><Link to='/myAppliedJobs'>Applied Jobs</Link></li>
                                    <li><Link to='/addJobs'>Add A Job</Link></li>
                                    <li><Link to='/myAddJobs'>My Jobs</Link></li>
                                </>
                            }

                        </ul>
                    </div>


                    <a className="text-2xl font-bold flex items-center animate__animated animate__rubberBand text-lime-300">JobVoyage <CgWorkAlt className="ml-2" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lime-100 text-base font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allJobs'>All Jobs</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        {
                            user && <>
                                <li><Link to='/myAppliedJobs'>Applied Jobs</Link></li>
                                <li><Link to='/addJobs'>Add A Job</Link></li>
                                <li><Link to='/myAddJobs'>My Jobs</Link></li>
                            </>
                        }

                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    <div>
                        {
                            user ?
                                <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt='...' src={user && user.photoURL} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content rounded-box w-52 text-lime-100 bg-lime-900 bg-opacity-80">
                                            <li>
                                                <a>{user && user.displayName}</a>
                                            </li>
                                            <li>
                                                <a onClick={handleLogOut}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                :
                                <div>
                                    <button className="btn btn-neutral bg-lime-700 text-sm px-4 font-medium w-20"> <Link to='/login'>Login</Link> </button>
                                    <button className="btn btn-neutral bg-lime-700 text-sm px-4 font-medium w-20 ml-4"> <Link to='/register'>Register</Link> </button>
                                </div>
                        }


                    </div>

                    <div className="ml-3">
                        <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" onChange={handleThemeToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;