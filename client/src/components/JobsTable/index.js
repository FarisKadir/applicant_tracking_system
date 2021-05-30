import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import JobRow from '../JobRow';

function JobsTable () {

    const [jobList, setJobList] = useState([]);


    useEffect(() => {
        API.getData("jobs").then(res => {setJobList(res.data.rows);});       
    },[])
            

    return (
        <ul>
            <table className=" table table-sm table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID #</th>
                        <th>Title</th>
                        <th>Salary</th>
                        <th>Job Type</th>
                        <th>Department</th>
                        <th>Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <JobRow jobData={jobList}/>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            
        </ul>
    )
};

export default JobsTable;
