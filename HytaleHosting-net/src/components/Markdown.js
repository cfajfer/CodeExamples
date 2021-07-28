import ReactMarkdown from 'react-markdown';

import MarkdownLink from '../renderers/Link';
import MarkdownImage from '../renderers/Image';
import MarkdownBlockquote from '../renderers/Blockquote';
import MarkdownHeading from '../renderers/Heading';
import MarkdownList from '../renderers/List';
import MarkdownListItem from '../renderers/ListItem';
import MarkdownThematicBreak from '../renderers/ThematicBreak';

const Markdown = (props) => {
    return (
        <ReactMarkdown
            escapeHtml={false}
            className={`markdown${props.className ? ` ${props.className}` : ''}`}
            renderers={{
                link: MarkdownLink,
                image: MarkdownImage,
                blockquote: MarkdownBlockquote,
                list: MarkdownList,
                listItem: MarkdownListItem,
                heading: MarkdownHeading,
                thematicBreak: MarkdownThematicBreak
            }}>
            {props.children}
        </ReactMarkdown>
    );
}
 
export default Markdown;