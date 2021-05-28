import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import JobRow from '../JobRow';



function JobSearch () {

    const [jobList, setJobList] = useState([]);

    //API.getData("jobs").then(res => console.log(typeof res));


    useEffect(() => {
        API.getData("jobs").then(res => {setJobList(res.data)});   
    },[])
            

    return (
        <ul>
            <table className=" table table-sm table-striped table-hover table-bordered">
                <tr>
                    <th>ID #</th>
                    <th>Title</th>
                    <th>Responsibilities</th>
                    <th>Required Qualifications</th>
                    <th>Preferred Qualifications</th>
                    <th>Salary</th>
                    <th>Job Type</th>
                    <th>Department</th>
                </tr>
                <JobRow jobdata={jobList} />

            </table>
            
        </ul>
    )
};

export default JobSearch;
