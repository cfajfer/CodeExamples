import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className="image-carousel">
            <ul className="image-carousel__tab-list">
                {props.images.map((img, i) => (
                    <li className="image-carousel__tab-item">
                        <button onClick={() => setActiveIndex(i)} className={`image-carousel__tab-button${activeIndex === i ? ' image-carousel__tab-button--active' : ''}`}>
                            <Image className="image-carousel__tab-icon" src={img.icon} width={64} height={64} />
                            <h5 className="image-carousel__tab-label">{img.label}</h5>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="image-carousel__main">
                <Image src={props.images[activeIndex].image} width={800} height={400} className="image-carousel__main-image" />
            </div>
        </div>
    );
}
 
export default ImageCarousel;