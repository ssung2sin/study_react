import React from 'react';
import Alert from '@mui/material/Alert';
import AppleIcon from '@mui/icons-material/Apple';
function FourApp(props) {

    //배열변수 선언
    const names=['영환','성경','호석','민규','성신','형준'];

    //반복문을 변수에 저장후 출력해도 된다
    const nameList = names.map((name)=>(<li>{name}</li>))

    //색상을 5개 배열로 주시고 결과물을 div로 출력하세요(box로 className 주고할것)
    const color = ['red', 'green', 'blue', 'yellow', 'violet'];

    return (
        <div>
            <h3 className={'alert alert-info'}>FourApp입니다</h3>
            <Alert severity="error">배열연습<AppleIcon/></Alert>
            <div>
                <h3>map연습</h3>
                <ol>
                    {
                        names.map((name,index) =>(<b style={{marginLeft:'10px'}}>{index}:{name}</b>))
                    }
                </ol>

                <ol>
                    {nameList}
                </ol>
            </div>
            <hr/>
            <Alert severity="success">과제_배열색상 가로로 출력하기</Alert>
            {
                color.map((color)=>(<div className="box" style={{backgroundColor:color, width:'100px'
                    ,height:'100px',float:'left'}}></div>))
            }
        </div>
    );
}

export default FourApp;