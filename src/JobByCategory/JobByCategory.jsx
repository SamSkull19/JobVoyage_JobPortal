import { useQuery } from "@tanstack/react-query";
import JobBySingleCategory from "./JobBySingleCategory";
import { useState } from "react";
const JobByCategory = () => {

    const { isPending, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch('https://job-portal-server-khaki.vercel.app/jobLists').then((res) =>
                res.json(),
            ),
    })

    const [currentCategory, setCurrentCategory] = useState('All');

    if (isPending) {
        return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div> ;
    }



    const categories = ['All', ...new Set(jobs.map(job => job.jobCategory))];

    const filteredJobs = currentCategory === 'All' ? jobs : jobs.filter(job => job.jobCategory === currentCategory);



    return (
        <div>

            <div className="mt-20 roboto mb-20">
                <h2 className="mb-6 text-4xl text-center font-extrabold">Job By Category</h2>
                
                <div className="flex justify-center space-x-4 mb-8">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`btn ${currentCategory === category ? 'bg-[#244034] text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => setCurrentCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        filteredJobs.slice(0,6).map(job => <JobBySingleCategory key={jobs.id} job={job}></JobBySingleCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobByCategory;