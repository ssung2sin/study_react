import React, {useState} from 'react';

function WriteForm({onSave}) {

    const [name,setName]=useState('');
    const [photo,setPhoto]=useState('s1');
    const [blood,setBlood]=useState('A');

    const addDataEvent=()=>{
        onSave({name,photo,blood})
    }

    return (
        <div>
            <b>이름</b>
            <input type='text' style={{width:'100px'}} onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <b>이미지:</b>
            <select value={photo}
                onChange={(e)=>{
                setPhoto(e.target.value);
                alert(photo)
            }}>
                {
                    //1~10 까지 map 으로 돌리기 s1~s10
                    [...new Array(10)].map((a,idx)=>(<option>s{`${idx+1}`}</option>))
                }
            </select>
            <b>혈액형:</b>
            <select value={blood}
                onChange={(e)=>{
                setBlood(e.target.value);
            }}>
                <option>A</option>
                <option>B</option>
                <option>O</option>
                <option>AB</option>
            </select>
            <button type="button" className='btn btn-info' style={{marginLeft:'10px'}}
                    onClick={addDataEvent}>추가</button>
        </div>
    );
}

export default WriteForm;