import {useState, useEffect} from 'react';
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Typography, Fade, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ContactsIcon from '@material-ui/icons/Contacts';
import CommentIcon from '@material-ui/icons/Comment';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Query from '../Utility/Query';
import '../Styles/ContactList.css';

export default function ContactList(props) {

    const [allContacts, setAllContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState();

    useEffect(() => {
        callGetContactsQuery();
    }, []);

    const callGetContactsQuery = async() => {
        let res = await Query('/user', 'get')
        res = (!res.error ? res.data : null);
        setAllContacts(res);
    }

    const ContactListSearchCallback = (filteredContacts) => {
        setFilteredContacts(filteredContacts);
    }

    return (
        <>
        <Header content={
            <>
            <ContactsIcon/>
            <Typography variant="h5" component="h1" className="Header-text">
                Contacts
            </Typography>
            <IconButton onClick={() => props.AppCallbackSwitchView("AddContactView")} edge="end" aria-label="add" className="Right-icon">
                <AddIcon/>
            </IconButton>
            </>
        }/>

        <Search ContactListSearchCallback={ContactListSearchCallback} allContacts={allContacts}/>

        <Fade in={true} timeout={250}>
        <List className="Scroll-list">
        {(filteredContacts ? filteredContacts : allContacts).map(contact => {
            return(
            <button className="Contact-list-button" onClick={() => props.AppCallbackSwitchView("EditContactView", contact.id)}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={contact.firstName + ' ' + contact.lastName} src={contact.avatarPath} />
                </ListItemAvatar>
                <ListItemText
                    primary={contact.lastName + ', ' + contact.firstName}
                    secondary={
                        <>
                        {`(${contact.phoneNumber.substr(0,3)})-${contact.phoneNumber.substr(3,3)}-${contact.phoneNumber.substr(6,4)}`}
                        <br/>
                        {contact.emailAddress}
                        </>
                    }
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="message">
                        <CommentIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
            </button>
        )})}
        </List>
        </Fade>
        </>
    );
}