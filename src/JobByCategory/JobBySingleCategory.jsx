import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const JobBySingleCategory = ({ job }) => {
    const { _id, jobBanner, jobTitle, jobPostingDate, applicationDeadline, salaryRange, jobApplicantsNumber, userName, jobCategory } = job;

    const location = useLocation();
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
        <div>
            <div className=' bg-lime-200 p-6 rounded-2xl animate__heartBeat h-full mt-5'>
                <div>
                    <img src={jobBanner} alt={_id} className='w-[350px] h-[250px] rounded-2xl' />
                </div>
                <div className='mt-5'>


                    <h3 className='text-base font-medium mt-5'>Posted By : {userName}</h3>

                    <h3 className='text-2xl font-extrabold mt-5'>Job: {jobTitle}</h3>

                    <h3 className='text-sm font-bold mt-2 bg-[#244034] text-lime-200 w-[180px] pl-3 py-3 rounded-2xl'>Job Category: {jobCategory}</h3>

                    <div className='mt-3'>
                        <h4 className='text-lg font-bold '>Job Posting Date : {jobPostingDate}</h4>

                        <p className='text-lg font-bold mt-2'>Application Deadline : {applicationDeadline}</p>
                    </div>

                    <p className='text-sm bg-[#244034] text-lime-200 rounded-2xl font-bold my-3 p-2 pl-3'>Salary Range : {salaryRange} </p>

                    <p className='text-lg font-bold my-3'>Applicants Number : <span className='bg-teal-900 w-5 p-1 px-3 text-sm rounded-3xl text-lime-200'>{jobApplicantsNumber}</span> </p>


                    <button onClick={handleJobDetail} className="btn bg-[#244034] text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

JobBySingleCategory.propTypes = {
    job: PropTypes.object.isRequired,
}
export default JobBySingleCategory;