const ListItem = props => {
    console.log(props);
    return <li className="markdown__list-item">{props.children}</li>
}
 
export default ListItem;