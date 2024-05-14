import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useRef, useState } from "react";
import MyAppliedJob from "./MyAppliedJob";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const MyAppliedJobs = () => {

    const { user, loading } = useContext(AuthContext);

    const [myApply, setMyApply] = useState([]);

    const [myAppliedJob, setMyAppliedJob] = useState([]);

    const [filterMyJobs, setFilterMyJobs] = useState([]);



    const { isPending, error, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch('https://job-portal-server-6o9iss4ev-sifat-samins-projects.vercel.app/jobLists').then((res) =>
                res.json(),
            ),
    })


    const { data: jobApplication } = useQuery({
        queryKey: ['jobApplication'],
        queryFn: () =>
            fetch('https://job-portal-server-6o9iss4ev-sifat-samins-projects.vercel.app/jobApplication', { method: 'GET', credentials: 'include' }).then((res) =>
                res.json(),
            ),
    })


    useEffect(() => {
        setFilterMyJobs(myAppliedJob);
    }, [myAppliedJob]);


    useEffect(() => {
        if (user && user.email) {
            const myData = jobApplication?.filter(job => job.userApplyEmail === user.email);
            setMyApply(myData);
        }
    }, [user, jobApplication]);


    useEffect(() => {
        if (jobs && myApply) {
            const jobApplicationId = myApply.map(application => application.jobId);
            const myData = jobs.filter(job => jobApplicationId.includes(job._id));
            setMyAppliedJob(myData);
        }
    }, [jobs, myApply]);

    console.log(myAppliedJob);

    const handleJobCategory = filter => {
        if (filter === 'all') {
            setFilterMyJobs(myAppliedJob);
        }

        else if (filter === 'partTime') {
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'Part-Time');
            setFilterMyJobs(myNewJob);
        }

        else if (filter === 'remote') {
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'Remote');
            setFilterMyJobs(myNewJob);
        }

        else if (filter === 'hybrid') {
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'Hybrid');
            setFilterMyJobs(myNewJob);
        }

        else if (filter === 'onSite') {
            const myNewJob = myAppliedJob.filter(job => job.jobCategory === 'On Site');
            setFilterMyJobs(myNewJob);
        }
    }


    const downloadPDF = () => {
        const doc = new jsPDF();
        const tableRows = [];
        filterMyJobs.forEach(job => {
            const rowData = [
                job.jobTitle,
                job.jobPostingDate,
                job.applicationDeadline,
                job.salaryRange,
                jobApplication.find(appliedJob => appliedJob.jobId === job._id).userName,
                jobApplication.find(appliedJob => appliedJob.jobId === job._id).userEmail,
                jobApplication.find(appliedJob => appliedJob.jobId === job._id).resumeLink
            ];
            tableRows.push(rowData);
        });
        doc.autoTable({
            head: [['Job Title', 'Posting Date', 'Deadline', 'Salary Range', 'Your Name', 'Your Email', 'Resume Link']],
            body: tableRows,
        });
        doc.save("Applied_Jobs_Summary.pdf");
    };


    const tableRef = useRef(null)


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
                            <li onClick={() => handleJobCategory('all')}><a>All</a></li>

                            <li onClick={() => handleJobCategory('partTime')}><a>Part-Time</a></li>

                            <li onClick={() => handleJobCategory('remote')}><a>Remote</a></li>

                            <li onClick={() => handleJobCategory('hybrid')}><a>Hybrid</a></li>

                            <li onClick={() => handleJobCategory('onSite')}><a>On Site</a></li>
                        </ul>
                    </div>
                </div>



                <table ref={tableRef} className="table bg-[#244034]">

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
                                myApply={myApply.find(appliedJobs => appliedJobs.jobId === job._id)} >
                            </MyAppliedJob>)
                        }


                    </tbody>

                </table>

                <div className="flex justify-center items-center mt-10">
                    <button onClick={downloadPDF} className="w-[150px] py-3 transition-colors duration-200 transform bg-[#244034] rounded-md hover:bg-gray-500 text-white focus:outline-none focus:bg-gray-600 text-lg font-medium">Download Page</button>
                </div>


            </div>
        </div>
    );
};

export default MyAppliedJobs;