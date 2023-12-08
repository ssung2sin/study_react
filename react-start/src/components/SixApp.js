import React from 'react';
import Alert from '@mui/material/Alert';
import FastfoodIcon from '@mui/icons-material/Fastfood';

function SixApp(props) {
    return (
        <div>
            <h3 className={'alert alert-info'}>SixApp입니다</h3>
            <Alert severity="info">배열연습<FastfoodIcon/></Alert>
        </div>
    );
}

export default SixApp;