import '../Styles/Header.css';

export default function Header(props) {

    return (
        <div className="Header">
            {props.content}
        </div>
    );
}