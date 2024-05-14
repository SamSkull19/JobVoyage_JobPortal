import PropTypes from 'prop-types';

const MyAppliedJob = ({ job, myApply }) => {


    const { _id, jobBanner, jobTitle, jobPostingDate, applicationDeadline, salaryRange } = job;

    const { userName, userApplyEmail, resumeLink } = myApply;



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

            <td className='font-bold'>
                {userName}
            </td>

            <td className='font-bold'>
                {userApplyEmail}
            </td>

            <td className='font-bold'>
                {resumeLink}
            </td>
        


        </tr>
    );
};

MyAppliedJob.propTypes = {
    job: PropTypes.object.isRequired,
    myApply: PropTypes.object.isRequired,

}

export default MyAppliedJob;