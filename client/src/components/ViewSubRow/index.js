import React, {useState} from 'react';




function JobRow (props) {

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
                {sub.id}
            </td>
            <td>
                {sub.user.first_name}
            </td>
            <td>
                {sub.user.last_name}
            </td>
            <td>
                {sub.user.email}
            </td>
            <td>
                {sub.createdAt}
            </td>
            <td>
                {sub.user.resume_path}
            </td>
            
        </tr>
        </>
    )
}

export default JobRow
