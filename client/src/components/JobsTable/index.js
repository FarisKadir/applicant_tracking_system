import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import JobRow from '../JobRow';

function JobsTable () {

    const [jobs, setJobs] = useState([]);
    const [count, setCount] = useState(0);



    useEffect(() => {
        API.getData("jobs")
            .then(res => {
                setJobs(res.data.rows);
                setCount(res.data.count);
        });
    },[])

    
            

    return (
        <>
            <table className=" table table-sm table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID #</th>
                        <th>Title</th>
                        <th>Salary</th>
                        <th>Job Type</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <JobRow key={index} jobData={job} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Openings:</th>
                        <td>{count}</td>

                    </tr>
                </tfoot>
            </table>
        </>
    )
};

export default JobsTable;
