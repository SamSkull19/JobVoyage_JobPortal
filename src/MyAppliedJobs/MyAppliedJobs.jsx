import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyAppliedJob from "./MyAppliedJob";

const MyAppliedJobs = () => {

    const { loading } = useContext(AuthContext);

    const [myAppliedJob, setMyAppliedJob] = useState([]);

    const [filterMyJobs, setFilterMyJobs] = useState([]);

    const { isPending, error, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch('http://localhost:5000/jobLists').then((res) =>
                res.json(),
            ),
    })


    const { data: jobApplication } = useQuery({
        queryKey: ['jobApplication'],
        queryFn: () =>
            fetch('http://localhost:5000/jobApplication').then((res) =>
                res.json(),
            ),
    })


    useEffect(() => {
        setFilterMyJobs(myAppliedJob);
    }, [myAppliedJob]);
    

    useEffect(() => {
        if (jobs && jobApplication) {
            const jobApplicationId = jobApplication.map(application => application.jobId);
            const myData = jobs.filter(job => jobApplicationId.includes(job._id));
            setMyAppliedJob(myData);
        }
    }, [jobs, jobApplication]);

    console.log(myAppliedJob);

    const handleJobCategory = filter => {
        if(filter === 'all'){
            setFilterMyJobs(myAppliedJob);
        }

        else if(filter === 'partTime'){
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'Part-Time');
            setFilterMyJobs(myNewJob);
        }
        
        else if(filter === 'remote'){
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'Remote');
            setFilterMyJobs(myNewJob);
        }
        
        else if(filter === 'hybrid'){
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'Hybrid');
            setFilterMyJobs(myNewJob);
        }

        else if(filter === 'onSite'){
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'On Site');
            setFilterMyJobs(myNewJob);
        }
    }




    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    if (error) {
        return <p>Error</p>
    }


    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <div>
            <div className="max-w-[1170px] mx-auto my-16">
            

            <div className="flex justify-center items-center mb-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#244034] text-white text-base px-11">Job Category Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow text-base rounded-box w-60 bg-[#244034] bg-opacity-90 text-white">
                        <li onClick={ () => handleJobCategory('all') }><a>All</a></li>

                        <li onClick={ () => handleJobCategory('partTime') }><a>Part-Time</a></li>

                        <li onClick={ () => handleJobCategory('remote') }><a>Remote</a></li>

                        <li onClick={ () => handleJobCategory('hybrid') }><a>Hybrid</a></li>

                        <li onClick={ () => handleJobCategory('onSite') }><a>On Site</a></li>
                    </ul>
                </div>
            </div>



            <table className="table bg-[#244034]">

                    <thead>
                        <tr className="bg-[#244034] text-base text-white">
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Your Name</th>
                            <th>Your Email</th>
                            <th>Resume Link</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filterMyJobs.map(job => <MyAppliedJob 
                                key={myAppliedJob._id} 
                                job={job} 
                                jobApplication={jobApplication.find(appliedJobs => appliedJobs.jobId === job._id)} >
                                </MyAppliedJob>)
                        }


                    </tbody>

                </table>
           
        
        </div>
        </div>
    );
};

export default MyAppliedJobs;