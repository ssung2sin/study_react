import React, {useState} from 'react';
import SixSubApp from "./SixSubApp";
import SixSubApp2 from "./SixSubApp2";
import SixSubApp3 from "./SixSubApp3";

function SixApp(props) {

    const [number,setNumber]=useState(10);

    //증가
    const NumberIncre=()=>{
        setNumber(number+1);
    }

    const NumberDecre=()=>{
        setNumber(number-1);
    }

    //감소

    return (
        <div>
            <h3 className='alert alert-info'>SixApp입니다_부모자식간 컴포넌트통신</h3>
            <SixSubApp name="진평" age="23"/>
            <SixSubApp name="희찬" age="22"/>
            <SixSubApp name="형준" age="24"/>
            {/*자식은 연속적으로 호출 가능*/}
            <br/><hr/>
            <SixSubApp2 flower="수국" price="25000" linecolor='purple'/>
            <SixSubApp2 flower="튤립" price="35000" linecolor='pink'/>
            <SixSubApp2 flower="리시안셔스" price="15000" linecolor='white'/>
            <SixSubApp2 flower="할미꽃" price="22000" linecolor='blueviolet'/>
            <SixSubApp2 flower="지수-꽃" price="10000" linecolor='tomato'/>
            <div className='number'>{number}</div>
            <SixSubApp3 incre={NumberIncre} decre={NumberDecre}/>
        </div>
    );
}

export default SixApp;