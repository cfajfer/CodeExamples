const List = props => {
    if(props.node.ordered) {
        return <ol className="markdown__list markdown__list--ordered">{props.children}</ol>
    } else {
        return <ul className="markdown__list markdown__list--unordered">{props.children}</ul>
    }
}
 
export default List;