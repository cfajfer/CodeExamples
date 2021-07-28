const TeamItem = (props) => {
    return (
        <li className="team__item">
            <img src={props.image} alt={props.name} className="team__image" />
            <h4 className="team__name">{props.name}</h4>
        </li>
    );
}
 
export default TeamItem;