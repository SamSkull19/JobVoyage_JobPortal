import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyAddJob from "./MyAddJob";


const MyAddJobs = () => {
    const { user, loading } = useContext(AuthContext);

    const [myJob, setMyJob] = useState([]);

    
    const { isPending, error, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch('https://job-portal-server-khaki.vercel.app/jobLists').then((res) =>
                res.json(),
            ),
    })

    console.log(jobs);

    useEffect(() => {
        if (jobs) {
            const myData = jobs.filter(job => job.userEmail === user.email);
            setMyJob(myData);
        }
    }, [jobs, user.email]);

    
    const handleDeleteJobs = id => {
        const updatedJobs  = myJob.filter(job => job._id !== id);
        setMyJob(updatedJobs);
    };
    
    


    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    if (error) {
        return <p>Error</p>
    }

    console.log(myJob);

    return (
        <div className="max-w-[1170px] mx-auto my-16">
            
            <table className="table bg-[#244034]">

                    <thead>
                        <tr className="bg-[#244034] text-base text-white">
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Update Job</th>
                            <th>Delete Job</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myJob.map(job => <MyAddJob key={myJob._id} job={job} handleDeleteJobs={handleDeleteJobs} ></MyAddJob>)
                        }


                    </tbody>

                </table>
           
        
        </div>
    );
};

export default MyAddJobs;