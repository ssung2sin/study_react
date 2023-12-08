import React, {useState} from 'react';

function TwoApp(props) {

    const [photo,setPhoto]=useState('../image2/cat.gif');
    const changePhoto=(e)=>{
        setPhoto(e.target.value)
    }

    return (
        <div>
            <h3 className={'alert alert-info'}>TwoApp_radio버튼</h3>
            <b>이미지 선택: </b>
            &nbsp;&nbsp;
            <label>
                <input type={'radio'} name={'photo'} value={'../image2/b1.png'}
                       onClick={changePhoto}/> 이미지1
            </label>
            &nbsp;&nbsp;
            <label>
                <input type={'radio'} name={'photo'} value={'../image2/b2.png'}
                       onClick={changePhoto}/> 이미지2
            </label>
            &nbsp;&nbsp;
            <label>
                <input type={'radio'} name={'photo'} value={'../image2/b3.png'}
                       onClick={changePhoto}/> 이미지3
            </label>
            &nbsp;&nbsp;
            <label>
                <input type={'radio'} name={'photo'} value={'../image2/b5.png'}
                       onClick={changePhoto}/> 이미지4
            </label>
            &nbsp;&nbsp;
            <label>
                <input type={'radio'} name={'photo'} value={'../image2/b6.png'}
                       onClick={changePhoto}/> 이미지5
            </label>
            &nbsp;&nbsp;

            <img src={photo}/>
        </div>

    );
}

export default TwoApp;