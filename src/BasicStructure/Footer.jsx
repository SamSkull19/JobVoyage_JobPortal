import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";


import '../App.css';

const Footer = () => {
    return (
        <div className="mt-10 max-w-[1170px] mx-auto">
            <footer className="footer p-10 bg-[#244034] roboto text-lime-200">
                <aside>
                    <p ><span className="text-2xl font-extrabold flex items-center text-lime-400">JobVoyage <CgWorkAlt className="ml-2" /><br /><br /></span>Navigate Your Career Journey with JobVoyage<br /><br />Embark on a voyage to your dream career with <br />JobVoyage, where opportunities await at every turn.</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-lime-400">Services</h6>
                    <a className="link link-hover">All Jobs</a>
                    <a className="link link-hover">Applied Jobs</a>
                    <a className="link link-hover">Add A Job</a>
                    <a className="link link-hover">My Jobs</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-lime-400">Company</h6>
                    <p className="">Email: info@jobvoyage.com</p>
                    <p className="">Phone: +8801234567811</p>
                    <p className="">Website: www.jobvoyage.com</p>
                    <p className="">Address: 123 Craft Street, <br />Bajra, Sylhet</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-lime-400">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Copyright Policy</a>
                    <a className="link link-hover">Patent Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lime-400">Social</h6>
                    <a className="link link-hover flex items-center"><FaFacebook /> <span className="ml-2">Facebook</span></a>
                    <a className="link link-hover flex items-center"><FaTwitter /> <span className="ml-2">Twitter</span></a>
                    <a className="link link-hover flex items-center"><FaLinkedin /> <span className="ml-2">Linkedin</span></a>
                    <a className="link link-hover flex items-center"><FaInstagram /> <span className="ml-2">Instagram</span></a>


                </nav>
            </footer>
            <div className="flex justify-center items-center pt-5 pb-16">
                <h1 className="w-4/6 text-center text-sm font-semibold text-lime-200">
                © JobVoyage. All rights reserved. JobVoyage is a registered trademark. Unauthorized use or reproduction of content, including but not limited to text, images, and logos, is strictly prohibited without prior written consent from JobVoyage. </h1>
            </div>
        </div>
    );
};

export default Footer;