import React, { useState, useEffect } from 'react';
import {API} from '../../utils/API';
import JobRow from '../JobRow';

function JobsTable () {

    const [jobs, setJobs] = useState([]);
    const [count, setCount] = useState(0);

    const getJobs = () =>   {
        API.getData("jobs")
            .then(res => {
                setJobs(res.data.rows);
                setCount(res.data.count);
        }).catch(err => {console.log(err)});
    };

    useEffect(() => {
        getJobs();
    },[])


    useEffect(() => {
        const id = setInterval(getJobs,3000);
        return () => clearInterval(id);
    },[jobs])

    
            

    return (
        <>
            <div height="100">
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
                            <JobRow key={index} jobIndex={index} jobData={job} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Openings:</th>
                            <td>{count}</td>

                        </tr>
                    </tfoot>
                </table>
            </div>
            
        </>
    )
};

export default JobsTable;
