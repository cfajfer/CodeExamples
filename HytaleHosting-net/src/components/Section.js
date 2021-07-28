const Section = (props) => {
    return (
        <section
            className={`section${props.name ? ` ${props.name}` : ''}${props.margin ? ` section--margin` : ''}`}
            style={props.image ? {backgroundImage: `url(${props.image})`} : null}>
            <div className={`section__wrapper${props.margin ? ' section__wrapper--margin' : ''}`}>
                {props.children}
            </div>
        </section>
    );
}
 
export default Section;