const Heading = props => {
    switch (props.level) {
        case 1:
            return <h1 class="markdown__heading markdown__heading--1">{props.children}</h1>
        case 2:
            return <h2 class="markdown__heading markdown__heading--2">{props.children}</h2>
        case 3:
            return <h3 class="markdown__heading markdown__heading--3">{props.children}</h3>
        case 4:
            return <h4 class="markdown__heading markdown__heading--4">{props.children}</h4>
        case 5:
            return <h5 class="markdown__heading markdown__heading--5">{props.children}</h5>
        case 6:
            return <h6 class="markdown__heading markdown__heading--6">{props.children}</h6>
        default:
            return <p>this shouldn't return...</p>
    }
}
 
export default Heading;