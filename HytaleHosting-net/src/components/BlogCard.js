import Image from 'next/image';
import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <li className="blog-card">
            <div className="blog-card__header">
                <div className="blog-card__title-container">
                    <Link href={props.link}>
                        <a className="blog-card__link">
                            <h3 className="blog-card__title">{props.title}</h3>
                        </a>
                    </Link>
                    <p className="blog-card__subtitle">{props.tags.map(cur => cur.name).join(', ')}</p>
                </div>
                <span className="blog-card__date">{props.date}</span>
            </div>
            <div className="blog-card__main">
                <div className="blog-card__image-container">
                    <Image src={props.image} layout="fill" className="blog-card__image" /> 
                </div>
                <div className="blog-card__info markdown">
                    <p>{props.teaser}</p>
                    <Link href={props.link}>
                        <a className="blog-card__button btn btn--small">Read More</a>
                    </Link>
                </div>
            </div>
        </li>
    );
}
 
export default BlogCard;