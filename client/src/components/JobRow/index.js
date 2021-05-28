import React from 'react';

function JobRow (props) {

    const jobList = props.jobdata;

    return (
        <>
            {jobList.map(job => 
                <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.title}</td>
                    <td>{job.responsibilities}</td>
                    <td>{job.requiredQualifications}</td>
                    <td>{job.preferredQualifications}</td>
                    <td>{job.salary}</td>
                    <td>{job.job_type_id}</td>
                    <td>{job.department_id}</td>
                </tr>
            )}
        </>
    )
}

export default JobRow
