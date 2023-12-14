import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
import WriteForm from "./WriteForm";
import Stack from '@mui/material/Stack';
import RowItemApp from "./RowItemApp";
import TwoSubApp from "./TwoSubApp";
import TwoSubApp2 from "./TwoSubApp2";
import {Filter} from "@mui/icons-material";

function TwoApp(props) {

    const[color,setColor]=useState('magenta');
    const[message,setMessage]=useState('오늘은 수요일^^');
    const[photo,setPhoto]=useState('s5')

    const[likeColor,setLikeColor]=useState([
        'pink','yellow','skyblue'
    ])

    //3개의 이벤트를 만들어 전달
    const changeMessage=(msg)=>{
        setMessage(msg);
    }

    const changePhoto=(image)=>{
        setPhoto(image);
    }

    const changeColor=(col)=>{
        setColor(col);
    }

    //sub2_color 추가
    const addColorEvent=(color)=>{
        setLikeColor(likeColor.concat(color));
    }

    //동그란 색상 더블클릭시 삭제
    const deleteDivColor=(idx)=>{
        setLikeColor(likeColor.filter((item,i)=>(i!==idx)));
    }

    return (
        <div>
            <Alert severity="info">TwoApp!!</Alert>
            <br/>
            <h1 style={{color:color}}>{message}</h1>
            <img src={`../image/${photo}.jpg`}/>
            <br/>
            {
                likeColor.map((color,idx)=>(<div className='color-box' style={{backgroundColor:color}}
                onDoubleClick={()=>{deleteDivColor(idx)}}>{idx}</div>))
            }
            <br/><br/><br/>
            <TwoSubApp onMessage={changeMessage} onPhoto={changePhoto} onColor={changeColor}/>
            <br/>
            <TwoSubApp2 onAddColor={addColorEvent}/>
        </div>
    );
}

export default TwoApp;