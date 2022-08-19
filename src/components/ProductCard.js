import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import StarRating from './utils/StarRating';
import BtnFav from './utils/BtnFav';

export default function ProductCard(props) {
    return (
        <figure className={'product-card ' + props.className}>
            <Link to={props.link}><img src={props.imgUrl} alt={props.title}/></Link>
            <figcaption>
                <h5 className='mb-1'><Link to={props.link}>{props.title}</Link></h5>
                <div className='d-flex align-items-center mb-3'>
                    <StarRating rate={props.rating}/>
                    <div className='fs-12 gray ms-2'>
                        <span>{props.rating}</span> (<span>{props.reviewsCount}</span>)
                    </div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <div className='price'>399 руб</div>
                    <del>800 руб.</del>
                </div>
                <div className='d-flex'>
                    <button type='button' className='btn-1 flex-1'>В корзину</button>
                    <BtnFav check={false} className='ms-3'/>
                </div>
            </figcaption>
        </figure>
    );
}