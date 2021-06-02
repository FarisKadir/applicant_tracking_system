import React, { useState, useEffect } from 'react';
import ViewSubRow from '../ViewSubRow';

function JobSubmissionsTable (props) {

    const subs = props.subInfo;
    

    //Makes sure all data is loaded prior to rendering the table
    const [isLoaded, setIsLoaded] = useState();

    useEffect(() => {
        if (subs)  {
            setIsLoaded(true);
        }
    },[subs])
    

    return isLoaded ? (
                <table className=" table table-sm table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Submission ID #</th>
                            <th>Applicant First Name</th>
                            <th>Applicant Last Name</th>
                            <th>Applicant Email Address</th>
                            <th>Date Applied</th>
                            <th>View Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subs.map((sub, index) => (
                            <ViewSubRow key={index} subIndex={index} subData={sub} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Submissions:</th>
                            <td>{subs.length}</td>

                        </tr>
                    </tfoot>
                </table>
    ) : <h1>Loading Data...</h1>
};

export default JobSubmissionsTable;
