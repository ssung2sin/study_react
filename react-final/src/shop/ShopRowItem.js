import React from 'react';
import {useNavigate} from "react-router-dom";

function ShopRowItem(props) {
    let photoUrl = "http://localhost:9000/save/"

    const navi = useNavigate();

    return (
        <tr>
            <td>{props.idx + 1}</td>
            <td><img className='small' src={photoUrl + props.row.photo}/><b>{props.row.sangpum}</b></td>
            <td>
                <button type='button' className='btn btn-info'
                        onClick={() => {
                            navi(`/shop/detail/${props.row.num}`);
                        }}>상세보기
                </button>
            </td>
        </tr>
    );
}

export default ShopRowItem;