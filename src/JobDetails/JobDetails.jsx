import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const { isPending, error, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch('https://job-portal-server-6o9iss4ev-sifat-samins-projects.vercel.app/jobLists').then((res) =>
                res.json(),
            ),
    })


    const { user, loading } = useContext(AuthContext);

    const { displayName, email } = user;

    const [jobsData, setJobsData] = useState(jobs);

    useEffect(() => {
        setJobsData(jobs);
    }, [jobs]);

    console.log(user);

    const { id } = useParams();

    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    if (error) {
        return <p>Error</p>
    }

    const jobDetail = jobsData && jobsData.find(jobsData => jobsData._id === id);

    console.log(jobDetail);

    if (!jobDetail) {
        return <div>Details not found.</div>;
    }

    const { _id, jobBanner, jobTitle, jobPostingDate, applicationDeadline, salaryRange, jobDescription, jobApplicantsNumber, userName, jobCategory, userEmail } = jobDetail;




    const handleJobApply = event => {
        event.preventDefault();

        const form = event.target;

        const userName = form.uName.value;
        const userApplyEmail = form.uEmail.value;
        const resumeLink = form.resumeLink.value;
        const jobId = id;

        const currentDate = Date.now();
        const deadlineDate = new Date(applicationDeadline);

        const isDeadlinePassed = currentDate > deadlineDate;

        console.log(currentDate, deadlineDate);

        if (isDeadlinePassed) {
            toast.error("Application deadline has passed");
            return;
        }

        console.log(email , userEmail);
        
        if (userApplyEmail === userEmail) {
            toast.error("You Cannot apply your own Job");
            return;
        }

        const jobApply = { userName, userApplyEmail, resumeLink, jobId }

        console.log(jobApply);

        fetch('https://job-portal-server-6o9iss4ev-sifat-samins-projects.vercel.app/jobLists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApply)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    const updatedJobs = jobs.map(job => {
                        if (job._id === jobId) {
                            return { ...job, jobApplicantsNumber: job.jobApplicantsNumber + 1 };
                        }
                        return job;
                    });
                    setJobsData(updatedJobs);
                    toast("Job Application Successful");
                    event.target.reset();
                }
            })
    }


    return (
        <div className="max-w-[1170px] mx-auto mt-10">
            <div className="mt-10 flex justify-center">

                <div className='bg-lime-200 p-6 rounded-2xl '>
                    <h3 className='text-3xl text-gray-700 md:text-5xl font-bold mb-10 text-center '>Job Title: {jobTitle}</h3>

                    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between bg-[#244034] p-8 rounded-2xl">

                        <div className='ml-0 md:ml-10 mt-7 md:mt-0 w-[340px] md:w-[500px]'>

                            <h4 className='text-3xl font-bold text-cyan-200'>Job Category : {jobCategory}</h4>


                            <div className='mt-5 bg-cyan-200 text-[#244034] text-lg font-bold rounded-3xl'>
                                <h3 className='px-4 pt-3'>Posting Date : {jobPostingDate}</h3>
                                <h4 className='px-4 pb-3'>Application Deadline : {applicationDeadline}</h4>
                            </div>


                            <div className="mt-5">
                                <p className='text-xl md:text-lg font-medium text-cyan-200 mt-1'>Salary Range : {salaryRange}</p>
                                <p className='text-2xl md:text-xl font-bold text-gray-200 mt-2'>Added By : {userName}</p>
                                <p className='text-2xl md:text-xl font-bold text-gray-200 mt-1'>Applicants Number : {jobApplicantsNumber}</p>

                            </div>

                        </div>

                        <div className="my-8 text-gray-800 p-5 rounded-xl ml-0 md:ml-5 lg:ml-10 w-[340px] md:w-[600px]">
                            <div className="bg-cyan-200 p-5 rounded-2xl">
                                <h1 className="text-xl md:text-2xl font-semibold  mb-3">Job Detail :</h1>
                                <h3 className='text-xl md:text-xl font-semibold '>{jobDescription}</h3>
                            </div>

                            <div>
                                <button className="btn bg-cyan-200 text-gray-800 mt-5" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply Now !</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box bg-lime-200">

                                        <h3 className="font-bold text-xl text-center">Apply For {jobTitle}</h3>

                                        <form onSubmit={handleJobApply}>
                                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 text-lg">


                                                <div>
                                                    <label className="text-black dark:text-gray-200">Your Name : </label>
                                                    <input type="text" id="name" name="uName" placeholder="Enter Your Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={displayName} />
                                                </div>



                                                <div>
                                                    <label className="text-black dark:text-gray-200">Email : </label>
                                                    <input type="email" id="email" name="uEmail" placeholder="Enter Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" defaultValue={email} />
                                                </div>



                                                <div>
                                                    <label className="text-black dark:text-gray-200">Resume Link : </label>
                                                    <input type="text" id="resume_link" name="resumeLink" placeholder="Enter Resume Link" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                                                </div>



                                            </div>

                                            <div className="flex justify-center mt-10 py-5">
                                                <button className="w-1/2 py-3 leading-5 text-black transition-colors duration-200 transform bg-slate-200 rounded-md hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-600 text-lg font-medium">Submit</button>
                                            </div>
                                        </form>

                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                        </div>

                                    </div>
                                </dialog>
                            </div>

                        </div>
                    </div>

                    <div className="mt-5 flex justify-center items-center bg-[#244034] p-5 rounded-2xl">
                        <img src={jobBanner} alt={_id} className='rounded-2xl w-[350px] md:w-[400px] lg:w-[550px] h-[300px]' />
                    </div>



                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;