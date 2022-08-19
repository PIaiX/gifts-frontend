import React, {useState} from 'react';
import { VscHeart } from "react-icons/vsc";
import { HiOutlineHeart } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";


export default function BtnFav(props) {
    const [checked, setChecked] = useState(props.check);
    return (
        <button type='button' className={'btn-fav ' + props.className} data-checked={(checked === true)?'true':'false'} onClick={()=>setChecked((checked)?false:true)}>
            <FiHeart />
        </button>
    );
}