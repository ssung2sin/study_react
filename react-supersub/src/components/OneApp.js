import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
import WriteForm from "./WriteForm";
import Stack from '@mui/material/Stack';
import RowItemApp from "./RowItemApp";

function OneApp(props) {

    const [board,setBoard]=useState([
        {
            name:'박명수',
            photo:'s1',
            blood:'AB',
            today:new Date()
        },
        {
            name:'박명수',
            photo:'s1',
            blood:'AB',
            today:new Date()
        },
        {
            name:'박명수',
            photo:'s1',
            blood:'AB',
            today:new Date()
        },
        {
            name:'박명수',
            photo:'s1',
            blood:'AB',
            today:new Date()
        }
    ])
    const datasave =(data)=>{
        setBoard(board.concat({
            ...data,
            today:new Date()
        }))
    }

    const dataDelete=(idx)=>{
        setBoard(board.filter((item,i)=>(i!==idx)));
    }
    return (
        <div style={{marginLeft:'100px'}}>
            <Stack sx={{width:'100%'}} spacing={2}>
                <Alert severity="info">OneApp!!_테이블만들기(부모자식간의 통신)</Alert>
                <WriteForm onSave={datasave}/>

                <table className='table table-bordered' style={{width:'600px'}}>
                    <caption align='top'><b>Board 배열 출력 연습</b></caption>
                    <thead>
                        <tr className='table-success'>
                            <th width='100'>이름</th>
                            <th width='120'>사진</th>
                            <th width='80'>혈액형</th>
                            <th width='160'>날짜</th>
                            <th width='70'>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        board.map((row,index)=>(<RowItemApp row={row} idx={index} onDelete={dataDelete}/>))
                    }
                    </tbody>
                </table>
            </Stack>
        </div>
    );
}

export default OneApp;