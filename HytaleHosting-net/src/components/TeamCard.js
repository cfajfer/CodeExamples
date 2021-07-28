const TeamCard = (props) => {
    return (
        <li className="about-us__ourteam-item">
            <div className="about-us__ourteam-item-image-container">
                <img src={props.image} alt={`${props.name} headshot`} className="about-us__ourteam-item-image team__image" />
                <ul className="footer__social-list about-us__ourteam-socials">
                    {props.socials.map(cur => (
                        <li className="footer__social-item">
                            <a href={cur.link} style={{backgroundColor: cur.color}}>
                                {cur.image}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="about-us__ourteam-item-main">
                <div className="about-us__ourteam-item-header">
                    <h4 className="about-us__ourteam-item-name">{props.name}</h4>
                    <span className="about-us__ourteam-item-title">{props.title}</span>
                </div>
                <div className="about-us__ourteam-item-info markdown">
                    {props.markdown}
                </div>
            </div>
        </li>
    );
}
 
export default TeamCard;