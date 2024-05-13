import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

import Swal from 'sweetalert2'

const AddJobs = () => {
    const [postDate, setPostDate] = useState(new Date());
    const [deadlineDate, setDeadlineDate] = useState(new Date());

    const { user } = useContext(AuthContext);

    const { displayName, email } = user;

    const handleAddJobs = event => {
        event.preventDefault();

        const form = event.target;

        const userName = form.username.value;
        const userEmail = form.emailAddress.value;
        const jobTitle = form.jobTitle.value;
        const jobCategory = form.jobCategory.value;
        const jobDescription = form.jobDescription.value;
        const salaryRange = form.salaryRange.value;
        const jobBanner = form.bannerLink.value;
        const jobApplicantsNumber = form.jobApplicantsNumber.value;
        const jobPostingDate = form.postingDate.value;
        const applicationDeadline = form.applicationDeadline.value;


        const newJob = { userName, userEmail, jobTitle, jobCategory, jobDescription, salaryRange, jobBanner, jobApplicantsNumber, jobPostingDate, applicationDeadline }

        console.log(newJob);
        
        fetch('http://localhost:5000/jobLists', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Posted Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  event.target.reset();
            }
        })

    }

    return (
        <div>
            <div>
                <section className="max-w-4xl p-6 mx-auto bg-[#244034] rounded-md shadow-md dark:bg-gray-800 my-20">
                    <h1 className="text-3xl font-bold text-white text-center py-8">Post Jobs</h1>

                    <form onSubmit={handleAddJobs}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 text-lg">

                            <div>
                                <label className="text-white dark:text-gray-200">User Name :</label>
                                <input type="text" id="username" name="username" placeholder="Enter Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={displayName} disabled />
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200">Email Address : </label>
                                <input type="email" id="emailAddress" name="emailAddress" placeholder="Enter Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={email} disabled />
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200">Job Title : </label>
                                <input type="text" id="jobTitle" name="jobTitle" placeholder="Enter Job Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>


                            <div>
                                <label className="text-white dark:text-gray-200">Job Category : </label>
                                <select id="jobCategory" name="jobCategory" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    <option value="" disabled selected>Select Job Category</option>
                                    <option>Remote</option>
                                    <option>Part-Time</option>
                                    <option>Hybrid</option>
                                    <option>On Site</option>
                                </select>
                            </div>


                            <div>
                                <label className="text-white dark:text-gray-200">Job Description : </label>
                                <input type="text" id="jobDescription" name="jobDescription" placeholder="Enter Short Job Description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200">Salary Range : </label>
                                <input type="text" id="salaryRange" name="salaryRange" placeholder="Enter Salary Range (Ex. $100 - $500 per month) " className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>


                            <div>
                                <label className="text-white dark:text-gray-200">Job Banner Link : </label>
                                <input type="text" id="bannerLink" name="bannerLink" placeholder="Enter Banner Link" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200">Applicants Number : </label>
                                <input type="number" id="jobApplicantsNumber" name="jobApplicantsNumber" placeholder="Enter Processing Time (In Days)" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={0} />
                            </div>


                            <div>
                                <label className="text-white dark:text-gray-200">Posting Date : </label>
                                <br />
                                <div className="w-full">
                                    <DatePicker id="postingDate" name="postingDate" placeholder="Enter Posting Date"
                                        selected={postDate}
                                        onChange={(date) => setPostDate(date)}
                                        dateFormat="yyyy-MM-dd"
                                        className="block w-full md:w-[410px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200">Application Deadline : </label>
                                <br />
                                <DatePicker id="applicationDeadline" name="applicationDeadline" placeholder="Enter Application Deadline"
                                    selected={deadlineDate}
                                    onChange={(date) => setDeadlineDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    className="block w-full md:w-[410px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>






                        </div>

                        <div className="flex justify-center mt-10 py-5">
                            <button className="w-1/2 py-3 leading-5 text-black transition-colors duration-200 transform bg-slate-200 rounded-md hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-600 text-lg font-medium">Add Item</button>
                        </div>
                    </form>
                </section>

            </div>
        </div>
    );
};

export default AddJobs;