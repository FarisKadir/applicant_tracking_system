import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {API} from '../../utils/API';

export default function JobForm (props) {


    //Set the initial state for the job info and update it as the user changes it on the form
    const [jobInfo, setJobInfo] = useState({
        title: "Enter A Title",
        department_id: 0,
        department: {
            id: 0,
            name: "Select A Department"
        },
        job_type_id: 0,
        job_type: {
            id: 0,
            name: "Select A Job Type",
        },
        responsibilities: 'Enter Responsibilities',
        requiredQualifications: 'Enter Required Qualifications',
        preferredQualifications: 'Enter Preferred Qualifications',
        salary: 0            
    });

    useEffect(() => {
        if (props.jobInfo) {
            setJobInfo(props.jobInfo)
        }
    },[props.jobInfo]);


    //These are all the events that are handled that will update the jobInfo state

    //Anytime a user changes any of the data for the job this will update the current jobInfo state.
    const handleOnChange = (e) => {

        const key = e.target.id;
        const value = e.target.value;

        setJobInfo({
            ...jobInfo,
            [key]: value
        });
    };


    //This will submit the jobInfo updates to the database
    const handleSubmit = () => {
        if (props.jobInfo) {    
            API.updateData(`jobs/${jobInfo.id}`, jobInfo) 
            .then(res => {
                
                props.handleClose();
            })
            .catch(err => console.log(err) );
        } else {
            API.createData(`jobs`, [jobInfo]) 
            .then(res => {
                
                props.handleClose();
            })
            .catch(err => console.log(err));
        };
    };

    //This calls back the original information from the props.jobInfo
    const handleUndo = (e) =>   {
        setJobInfo(props.jobInfo);
    };

    //this will delete the job from the database.
    const handleDelete = (e) => {
        props.handleClose();

        API.deleteData(`jobs`,jobInfo.id) 
        .then()
        .catch(err => console.log(err) );
    };


    //Get all the current job types from the database and load them into the select screen
    const [jobTypes, setJobTypes] = useState([]);
    

    useEffect(() => {
        API.getData("jobtypes")
            .then(res => {
                setJobTypes(res.data);
        });
    },[]);


     //Get all the current job types from the database and load them into the select screen
    const [departments, setDepartments] = useState([]);


    useEffect(() => {
        API.getData("departments")
            .then(res => {
                setDepartments(res.data);
        });
    },[]);


    //Set the initial state for isLoaded. This will allow all of the data to be set in state prior to rendering.

    const [isLoaded, setIsLoaded] = useState(false);

    
    useEffect(() => {
        if (jobInfo.title && jobTypes[0] && departments[0]) {
            setIsLoaded(true);
        } else {
            setIsLoaded(false);
        }
    },[jobInfo, jobTypes, departments]);



    return (
        isLoaded &&
        <>
            <form>
                <label className="mb-1">
                    <strong>Department</strong>
                </label><br/>
                <select className="mb-3" id="department_id" onChange={handleOnChange}>
                    <option value={jobInfo.department_id} >{jobInfo.department.name} </option> 
                    {departments.map((department, index) => {
                        if (department.id !== jobInfo.department_id) {
                            return <option key ={index} value={department.id}>
                                {department.name}
                            </option>
                            }
                        }
                    )}
                </select>
                <br/>
                <label className="mb-1">
                <strong>Job Type</strong>
                </label><br/>
                <select className="mb-3" id="job_type_id" onChange={handleOnChange}>
                    <option value={jobInfo.job_type_id}>{jobInfo.job_type.name}</option>
                    {jobTypes.map((jobType, index) => {
                        if (jobType.id !== jobInfo.job_type_id) {
                            return <option key ={index} value={jobType.id}>
                                {jobType.name}
                            </option>
                            }
                        }
                    )}
                </select>
                <br/>
                <label className="mb-1">
                    <strong>Title</strong>
                </label><br/>
                <input className="mb-3" size="50" type="text" value={jobInfo.title} onChange={handleOnChange} id="title"/>
                <br/>
                <label className="mb-1">
                    <strong>Responsibilities</strong>
                </label><br/>
                <textarea className="mb-3" cols="100" value={jobInfo.responsibilities} onChange={handleOnChange} id="responsibilities"/>
                <br/>
                <label className="mb-1">
                    <strong>Required Qualifications</strong>
                </label>
                <br/>
                <textarea className="mb-3" cols="100" value={jobInfo.requiredQualifications} onChange={handleOnChange} id="requiredQualifications"/>
                <br/>
                <label className="mb-1">
                    <strong>Preferred Qualifications</strong>
                </label>
                <br/>
                <textarea className="mb-3" cols="100" value={jobInfo.preferredQualifications} onChange={handleOnChange} id="preferredQualifications"/>
                <br/>
                <label className="mb-1">
                    <strong>Salary</strong>
                </label>
                <br/>
                <input className="mb-3" type="number" value={jobInfo.salary} onChange={handleOnChange} id="salary" max="200000"/>
                <br/>
            </form>
            <div className="mt-3">
                <Button className="m-1" variant="primary" type="submit" onClick={handleSubmit}>Submit Changes</Button>
                <Button className="m-1" variant="warning" onClick={handleUndo}>Undo Changes</Button>
                <Button className="m-1" variant="danger" onClick={handleDelete}>Delete</Button>
            </div>
        </>
        );
};