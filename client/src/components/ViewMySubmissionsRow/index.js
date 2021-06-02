import React, {useState} from 'react';




function ViewMySubmissionsRow (props) {

    const sub = props.subData;


    const index = props.subIndex + 1;
  

    const [show, setShow] = useState(false);

    const handleClose = () => {
        
        return setShow(false)
    };

    const handleShow = () => {setShow(true)};

    return (
        <>
        <tr key={index} onClick={handleShow}>
            <td>
                {sub.job.id}
            </td>
            <td>
                {sub.job.job_type.name}
            </td>
            <td>
                {sub.job.title}
            </td>
            <td>
                {sub.job.department.name}
            </td>
            <td>
                {sub.job.salary}
            </td>        
        </tr>
        </>
    )
}

export default ViewMySubmissionsRow
