import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyAddJob = ({ job }) => {
    const [myJob, setMyJob] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setMyJob(job);
    }, [job]);

    const handleUpdate = id => {
        navigate(`/updateMyJobs/${id}`);
        console.log(id);
    }

    const { _id, jobBanner, jobTitle, jobPostingDate, applicationDeadline, salaryRange } = myJob;

    console.log(job, myJob);
    return (
        <tr className='bg-lime-200'>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={jobBanner} alt={_id} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{jobTitle}</div>
                    </div>
                </div>
            </td>


            <td className='font-bold'>
                {jobPostingDate}
            </td>

            <td className='font-bold'>
                {applicationDeadline}
            </td>

            <td className='font-bold'>
                {salaryRange}
            </td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-active btn-ghost btn-sm">Update Details</button>
            </th>

            <th>
                <button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>

        </tr>
    );
};

export default MyAddJob;

MyAddJob.propTypes = {
    job: PropTypes.object.isRequired,
}