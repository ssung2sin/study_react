import React, {useState} from 'react';
import img1 from '../image/b1.png';
import img2 from '../image/b2.png';
import img3 from '../image/b3.png';
import img4 from '../image/b5.png';
import img5 from '../image/b6.png';
import img6 from '../image/b7.png';
function ThreeApp(props) {

    const [hp1,setHp1]=useState('02');
    const [hp2,setHp2]=useState('1111');
    const [hp3,setHp3]=useState('2222');
    const [photo,setPhoto]=useState(1);

    const changeHp1=(e)=>{
        setHp1(e.target.value)
    }
    const changeHp2=(e)=>{
        setHp2(e.target.value)
    }
    const changeHp3=(e)=>{
        setHp3(e.target.value)
    }
    const changePhoto=(e)=>{
        let img;
        switch (e.target.value) {
            case '1':
                img = img1;
                break;
            case '2':
                img = img2;
                break;
            case '3':
                img = img3;
                break;
            case '4':
                img = img4;
                break;
            case '5':
                img = img5;
                break;
            case '6':
                img = img6;
                break;
            default:
                img = img1;
        }
        setPhoto(img);
    }

    return (
        <div>
            <h3 className={'alert alert-info'}>ThreeApp입니다_문제1</h3>
            <div>
                <div className={'d-inline-flex'}>
                    <select style={{width:"100px"}}onChange={changeHp1}>
                        <option>02</option>
                        <option>010</option>
                        <option>031</option>
                        <option>017</option>
                        <option>052</option>
                    </select>
                    <b>-</b>
                    <input type={'text'} maxLength={'4'} className={'form-control'}
                    style={{width:'120px'}} defaultValue={hp2} onChange={changeHp2}/>
                    <b>-</b>
                    <input type={'text'} maxLength={'4'} className={'form-control'}
                           style={{width:'120px'}} defaultValue={hp3} onChange={changeHp3}/>

                    <b style={{marginLeft:'50px'}}>이미지 선택: </b>
                    <select className={'form-control'} onChange={changePhoto}>
                        <option value={'1'}>이미지1</option>
                        <option value={'2'}>이미지2</option>
                        <option value={'3'}>이미지3</option>
                        <option value={'4'}>이미지4</option>
                        <option value={'5'}>이미지5</option>
                        <option value={'6'}>이미지6</option>
                    </select>
                </div>
                <br/><br/>
                <hr/>
                <h1>{hp1}-{hp2}-{hp3}</h1>
                <img src={photo}/>
            </div>
        </div>
    );
}

export default ThreeApp;