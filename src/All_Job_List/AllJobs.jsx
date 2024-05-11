import { useQuery } from "@tanstack/react-query";
import JobList from "./JobList";
import { useState } from "react";



const AllJobs = () => {
    const { isPending, error, data: jobs } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/jobLists').then((res) =>
                res.json(),
            ),
    })


    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    if (isPending) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if (error) {
        return <p>Error</p>
    }

    console.log(jobs);

    const filteredJobs = jobs.filter(job =>
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className="max-w-[1170px] mx-auto mt-10">
            <div className="overflow-x-auto">

                <input type="text" placeholder="Search by Job Title" value={searchQuery} onChange={handleSearchChange} className="input input-bordered mb-4 bg-lime-200 w-[500px]" />


                <table className="table bg-[#244034]">

                    <thead>
                        <tr className="bg-[#244034] text-base text-white">
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredJobs.map(job => <JobList key={jobs._id} job={job} ></JobList>)
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllJobs;