import { Link } from 'react-router-dom';

export default function ArticlePreview(props) {
    return (
        <figure className='article-preview'>
            <img src={props.imgUrl} alt={props.title}/>
            <figcaption>
                <h4><Link to={props.link}>{props.title}</Link></h4>
            </figcaption>
        </figure>
    );
}