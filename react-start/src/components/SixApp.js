<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React from 'react';
>>>>>>> 15c9e18740b1590def59dd2a16165c6faf19e85e
import Alert from '@mui/material/Alert';
import FastfoodIcon from '@mui/icons-material/Fastfood';

function SixApp(props) {
<<<<<<< HEAD

    const [names,setNames] = useState(['진평','현규','희찬','민규','성신']);
    const [irum,setIrum]=useState('');
    
    //추가버튼
    const btnInsert=()=>{
        if(irum.trim()===""){
            alert("값을 입력해주세요");
            setIrum('');
            return;
        }
        setNames(names.concat(irum));
        setIrum('');
    }

    //입력이 되도록... 이벤트
    const txtInput=(e)=>{

        setIrum(e.target.value);
    }

    const txtEnter=(e)=>{
        if(e.key==='Enter'){
            btnInsert();
        }
    }

    const dataRemove=(index)=>{
        console.log('remove: '+index);

        //방법1..slice
        /*setNames([
            ...names.slice(0,index),
            ...names.slice(index+1,names.length)
        ])*/

        //방법2..filter
        setNames(names.filter((item,i)=>i!==index));
    }

    return (
        <div>
            <h3 className={'alert alert-info'}>SixApp입니다</h3>
            <Alert severity="info">배열연습_#6<FastfoodIcon/></Alert>

            {/*input의 경우 value값을 주는 순간 입력 불가능*/}
            <input placeholder={'이름입력'} value={irum} onChange={txtInput}
            onKeyUp={txtEnter}/>
            <button type="button" className="btn btn-info" style={{marginLeft:'10px'}} onClick={btnInsert}>추가</button>
            <br/>
            <h4>이름을 더블클릭하면 삭제됩니다</h4>
            <ul>
                {
                    names.map((name,index)=>(<li className={'data'}
                                                 onDoubleClick={()=>dataRemove(index)}>{name}</li>))
                }
            </ul>
=======
    return (
        <div>
            <h3 className={'alert alert-info'}>SixApp입니다</h3>
            <Alert severity="info">배열연습<FastfoodIcon/></Alert>
>>>>>>> 15c9e18740b1590def59dd2a16165c6faf19e85e
        </div>
    );
}

export default SixApp;