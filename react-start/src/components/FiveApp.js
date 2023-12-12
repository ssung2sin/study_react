import React from 'react';
import Alert from '@mui/material/Alert';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';
import img1 from '../image/cat.gif';
import img2 from '../image/b1.png';
import img3 from '../image/b2.png';
import img4 from '../image/b3.png';
import img5 from '../image/b4.png';
import img6 from '../image/b5.png';

function FiveApp(props) {
    //이미지를 배열변수에 넣기
    const imgArr=[img1, img2, img3, img4, img5, img6];
    const imgArr2 =['1','2','3','4','5','6'];
    return (
        <div>
            <h3 className={'alert alert-info'}>FiveApp입니다</h3>
            <Alert severity="warning">배열연습<ElectricScooterIcon/></Alert>
            <h4>src의 이미지를 배열로 넣어 반복하기</h4>
            {
            imgArr.map((myimg)=>(<img className={'photo'} src={myimg} style={{width:'100px'}}/>))
            }
            <h4>public의 의미지를 배열로 넣어 반복하기</h4>
            {
                //예전방식
                imgArr2.map((photo)=>(<img src={'../image2/b'+photo+'.png'} className={'photo'}/>))
            }
            <br/>
            <h4>public의 의미지를 배열로 넣어 리터럴 반복하기</h4>
            {
                //리터럴방식
                imgArr2.map((photo)=>(<img src={`../image2/b${photo}.png`} className={'photo'}/>))
            }
        </div>
    );
}

export default FiveApp;