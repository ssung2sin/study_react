import React, {useEffect, useState} from 'react';

function OneApp(props) {

    const [name,setName]=useState('강호동');
    const [addr,setAddr]=useState('서울시')

    //useEffect : 값 입력시 계속해서 랜더링디며 호추될수도 있고 생성자처럼
    //딱 1번 호출되기도 한다
    useEffect(() => {
        console.log("state변수가 값 변경시 다 호출");
    });
    useEffect(()=>{
        console.log("처음 랜더링시 한번만 호출.. 생성자처럼")
    }, []);
    useEffect(()=>{
        console.log("이름 변경시에만 호출")
    }, [name]);
    return (
        <div>
            <h3 className={'alert alert-danger'}>OneApp입니다.</h3>
            <h3>이름 : <input type='text' className='form-control' defaultValue={name}
            onChange={(e)=>{
                setName(e.target.value);
            }}/></h3>
            <h3>주소 : <input type='text' className='form-control' defaultValue={addr}
            onChange={(e)=>{
                setAddr(e.target.value);
            }}/></h3>
            <h2>이름: {name}</h2>
            <h2>주소: {addr}</h2>
        </div>
    );
}

export default OneApp;