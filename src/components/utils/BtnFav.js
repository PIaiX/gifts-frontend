import React, {useState} from 'react';
import { FiHeart } from "react-icons/fi";

export default function BtnFav(props) {
    const [checked, setChecked] = useState(props.check);
    return (
        <button type='button' className={'btn-fav ' + props.className} data-checked={(checked === true)?'true':'false'} onClick={()=>setChecked((checked)?false:true)}>
            <FiHeart />
        </button>
    );
}