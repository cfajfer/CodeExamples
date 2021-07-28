const Image = props => {
    return <img alt="yeet" src={process.env.NEXT_PUBLIC_BLOG_URL + props.src} title={props.title} class="markdown__image" />
}
 
export default Image;