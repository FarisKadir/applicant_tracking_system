import React from 'react';
import JobsTable from '../../components/JobsTable';
import AddJobBtn from '../../components/AddJobBtn';

const Jobs = () =>  {

    return (
        <>
            <div className="container s12 m6 l6 xl6">
                <AddJob />
                <JobsTable />
            </div>
            
        </>
    )
};

export default Jobs