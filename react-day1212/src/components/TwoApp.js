import React, {useState} from 'react';

function TwoApp(props) {

    //객체처리변수
    const [inputs,setInputs]=useState({
        name: '강호동',
        addr: '서울시 강남구',
        age:20
    });

    //3개의 공통함수
    const changeData=(e)=>{
        console.log("name: "+e.target.name);
        console.log("value: "+e.target.value);
        const {name,value}=e.target;

        setInputs({
            ...inputs, //기존 멤버값 유지된다
            [name]:value //나머지는 사라진다  해결은 펼침연산자

        })
    }

    return (
        <div>
            <h3 className={'alert alert-danger'}>TwoApp입니다_state를 객체변수로 받아서 테스트</h3>
            <h3>이름 : <input type='text' name='name' defaultValue={inputs.name}
                            onChange={changeData}/></h3>
            <h3>주소 : <input type='text' name='addr' defaultValue={inputs.addr}
                            onChange={changeData}/></h3>
            <h3>나이 : <input type='text' name='age' defaultValue={inputs.age}
                            onChange={changeData}/></h3>
            <hr/>
            <h2>이름: {inputs.name},{inputs['name']}</h2>
            <h2>주소: {inputs.addr},{inputs['addr']}</h2>
            <h2>나이: {inputs.addr},{inputs['age']}</h2>
        </div>
    );
}

export default TwoApp;