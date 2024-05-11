import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const JobList = ({ job }) => {
    const { _id, jobBanner, jobTitle, jobPostingDate, applicationDeadline, salaryRange } = job;

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleJobDetail = () => {
        if(user){
            navigate(location?.state ? location.state : `/jobDetails/${job._id}`);
        }
        else{
            navigate('/login');
        }
    }

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
                <button onClick={handleJobDetail} className="btn btn-active btn-ghost btn-sm">View Details</button>
            </th>
        </tr>

    );
};

JobList.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobList;