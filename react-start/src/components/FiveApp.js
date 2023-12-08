import React from 'react';
import Alert from '@mui/material/Alert';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';

function FiveApp(props) {
    return (
        <div>
            <h3 className={'alert alert-info'}>FiveApp입니다</h3>
            <Alert severity="warning">배열연습<ElectricScooterIcon/></Alert>
        </div>
    );
}

export default FiveApp;