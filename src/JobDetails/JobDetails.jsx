import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const { isPending, error, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch('http://localhost:5000/jobLists').then((res) =>
                res.json(),
            ),
    })

    const { id } = useParams();

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    if (error) {
        return <p>Error</p>
    }

    const jobDetail = jobs.find(job => job._id === id);

    console.log(jobDetail);

    if (!jobDetail) {
        return <div>Details not found.</div>;
    }

    const { _id, jobBanner, jobTitle, jobPostingDate, applicationDeadline, salaryRange, jobDescription, jobApplicantsNumber, userName, jobCategory } = jobDetail;

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
                            <button className="btn bg-cyan-200 text-gray-800 mt-5">Apply Now !</button>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center items-center bg-[#244034] p-5 rounded-2xl">
                        <img src={jobBanner} alt={_id} className='rounded-2xl w-[350px] md:w-[400px] lg:w-[550px] h-[300px]' />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default JobDetails;