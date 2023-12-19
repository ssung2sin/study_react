import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function ShopDetail(props) {

    const {num} = useParams();

    //dto들어올 변수선언
    const [data, setData] = useState('');

    //url 등록
    let detailUrl = "http://localhost:9000/shop/detail?num=" + num;
    let photoUrl = "http://localhost:9000/save/";

    //스프링으로부터 num에 해당하는 data 받기
    const onDataReceive = () => {
        axios.get(detailUrl).then(res => {
            console.log(res.data.sangpum);
            setData(res.data);
        }).catch(err => {
            alert(err);
        })
    }

    //처음 랜더링시
    useEffect(() => {
        onDataReceive();
    }, []);

    return (
        <div>
            <table className='table table-bordered' style={{width: '600px'}}>
                <caption align='top'><b>상품상세보기</b></caption>
                <tbody>
                <tr style={{height: '150px'}}>
                    <td width='350' rowSpan='4'>
                        <img src={photoUrl + data.photo} className='large'/>
                    </td>
                    <td>
                        상품명: {data.sangpum}
                    </td>
                </tr>
                <tr>
                    <td><h4>수량: {data.su}</h4></td>
                </tr>
                <tr>
                    <td><h4>단가: {data.dan}</h4></td>
                </tr>
                <tr>
                    <td><h4>입고일: {data.ipgoday}</h4></td>
                </tr>
                <tr>
                    <td colSpan='2' align='center'>
                        <button type='button' className='btn btn-outline-info'>목록</button>
                        <button type='button' className='btn btn-outline-warning'>추가</button>
                        <button type='button' className='btn btn-outline-success'>수정</button>
                        <button type='button' className='btn btn-outline-danger'>삭제</button>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    );
}

export default ShopDetail;