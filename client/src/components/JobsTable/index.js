import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {API} from '../../utils/API';
import JobRow from '../JobRow';

function JobsTable () {

    const {user, isAuthenticated} = useAuth0();

    //Manages the userInfo state and retrieves the user info after the page is rendered and if the user changes.
    const [userInfo, setUserInfo] = useState();
    
    useEffect(() => {
        if (isAuthenticated) {
          const auth0Id = user.sub.split("|",2)[1];
    
          API.getData(`users/${auth0Id}`)
            .then(res => {
              setUserInfo(res.data);
              console.log(res.data);
            })
        }
      },[user, isAuthenticated])

    const roleCol = '';

    const checkRole = () => {
        if (isLoaded && userInfo.role_id === 1) {
            return roleCol = (<th>Submissions</th>)
        } else {
            return roleCol = (<th>Apply</th>)
        }
    }

    //This manages the state of the jobs and count objects
    const [jobs, setJobs] = useState([]);
    const [count, setCount] = useState(0);

    //Retrieves jobs from the database
    const getJobs = () =>   {
        API.getData("jobs")
            .then(res => {
                setJobs(res.data.rows);
                setCount(res.data.count);
        }).catch(err => {console.log(err)});
    };

    //Loads jobs upon the initial render
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
        if (jobs && count && userInfo)  {
            setIsLoaded(true);
        }
    },[jobs, count, userInfo])




    

    return isLoaded ? (
                <table className=" table table-sm table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID #</th>
                            <th>Title</th>
                            <th>Salary</th>
                            <th>Job Type</th>
                            <th>Department</th>
                            {roleCol}
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <JobRow key={index} jobIndex={index} jobData={job} countData={count} />
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

export default JobsTable;
