const PartnerItem = (props) => {
    return (
        <li className="partner__item">
            <div className="partner__side partner__side--front">
                <img src={props.image} alt={props.label} className="partner__image" style={props.style} />      
            </div>
            <div className="partner__side partner__side--back">
                <div className="partner__info">
                    <h4 className="partner__title">{props.label}</h4>
                    <p className="partner__description">{props.description}</p>
                    <a href={props.link} className="partner__button btn btn--fill">View Partner</a>
                </div>
            </div>
        </li>
    );
}
 
export default PartnerItem;