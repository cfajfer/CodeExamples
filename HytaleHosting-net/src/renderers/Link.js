const Link = props => {
    return <a href={props.href} className="markdown__link">{props.children}</a>
}
 
export default Link;