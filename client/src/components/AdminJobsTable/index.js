import React, { useState, useEffect } from 'react';
import {API} from '../../utils/API';
import AdminJobRow from '../AdminJobRow';

function AdminJobsTable () {

    //This manages the state of the jobs and count objects
    const [jobs, setJobs] = useState([]);
    const [count, setCount] = useState(0);

    //Retrieves jobs from the database. This will also return the submissions data.
    const getJobs = () =>   {
        API.getData("jobs")
            .then(res => {
                setJobs(res.data.rows);
                setCount(res.data.count);
        }).catch(err => {console.log(err)});
    };

    // //Loads jobs upon the initial render
    useEffect(() => {
        getJobs();
    },[])

    //Loads jobs every 3 seconds after the initial render and after each time the jobs object changes
    useEffect(() => {
        const id = setInterval(getJobs,3000);
        return () => clearInterval(id);
    },[jobs])



    //Makes sure all data is loaded prior to rendering the table
    const [isLoaded, setIsLoaded] = useState();

    useEffect(() => {
        if (jobs && count)  {
            setIsLoaded(true);
        }
    },[jobs, count])




    

    return isLoaded ? (
                <table className=" table table-sm table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID #</th>
                            <th>Title</th>
                            <th>Salary</th>
                            <th>Job Type</th>
                            <th>Department</th>
                            <th># of Submissions</th>
                            <th>View Submissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <AdminJobRow key={index} jobIndex={index} jobData={job}/>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Openings:</th>
                            <td>{count}</td>

                        </tr>
                    </tfoot>
                </table>
    ) : <h1>Loading Data...</h1>
};

export default AdminJobsTable;
