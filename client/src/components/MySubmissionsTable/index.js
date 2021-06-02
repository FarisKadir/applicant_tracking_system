import React, { useState, useEffect } from 'react';
import {API} from '../../utils/API';
import { useAuth0 } from "@auth0/auth0-react";
import ViewMySubmissionsRow from '../ViewMySubmissionsRow';

function MySubmissionsTable () {

    const {user} = useAuth0();
    const auth0Id = user.sub.split("|",2)[1];

    //This manages the state of the jobs and count objects
    const [subs, setSubs] = useState([]);
    

    //Retrieves submissions from the database
    const getSubs = () =>   {
        API.getData(`submissions/byuser/${auth0Id}`)
            .then(res => {
                setSubs(res.data);
        }).catch(err => {console.log(err)});
    };

    //Loads jobs upon the initial render
    useEffect(() => {
        getSubs();
    },[])

    //Loads jobs every 3 seconds after the initial render and after each time the jobs object changes
    useEffect(() => {
        const id = setInterval(getSubs,3000);
        return () => clearInterval(id);
    },[subs])

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
                            <th>Job Id #</th>
                            <th>Job Type</th>
                            <th>Title</th>
                            <th>Department</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subs.map((sub, index) => (
                            <ViewMySubmissionsRow key={index} subIndex={index} subData={sub} />
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

export default MySubmissionsTable;
