import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';
import MapDialog from './MapDialog';

const AreaSelector = () => {
    const [content, setContent] = useState("");
    const [STName, setSTName] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <MapDialog show={show} StateName={STName} closeModal={handleClose} />
            <div style={{ backgroundColor: 'black' }}>
                <MapChart setTooltipContent={setContent} setStateName={setSTName} setShowDistrict={setShow} />
                <ReactTooltip>{content}</ReactTooltip>
            </div>
        </React.Fragment>
    );
}

export default AreaSelector;