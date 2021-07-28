import Header from '../Components/Header';
import {Typography, IconButton, List, ListItem, ListItemAvatar, Avatar, TextField, Grid, Fade, Button} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useState, useEffect } from 'react';
import Query from '../Utility/Query';


export default function EditContact(props){

    const [contact, setContact] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState();

    const callGetContactQuery = async() => {
        let res = await Query(`/user/${props.currentContactId}`, 'get');
        res = (!res.error ? res.data : null);
        res.phoneNumber = `(${res.phoneNumber.substr(0,3)})-${res.phoneNumber.substr(3,3)}-${res.phoneNumber.substr(6,4)}`;
        setPhoneNumber(res.phoneNumber);
        delete res['id'];
        delete res['createdAt'];
        delete res['updatedAt'];
        setContact(res);
    }

    const formatPhoneNumber = (value) => {
        setPhoneNumber(value);
        setContact({...contact, phoneNumber: value.substr(1,3) + value.substr(6,3) + value.substr(10,4)});
    }

    const callEditContactQuery = async() => {
        await Query(`/user/${props.currentContactId}`, 'put', JSON.stringify(contact));
        props.AppCallbackSwitchView("ContactListView");
    }

    const callDeleteContactQuery = async() => {
        await Query(`/user/${props.currentContactId}`, 'delete');
        props.AppCallbackSwitchView("ContactListView");
    }

    useEffect(() => {
        callGetContactQuery();
    },[]);


    return (
        <>
        <Header content={
            <>
            <IconButton onClick={() => props.AppCallbackSwitchView("ContactListView")} edge="end" aria-label="close">
                <CloseIcon/>
            </IconButton>
            <Typography variant="h5" component="h1" className="Header-text">
                Edit Contact
            </Typography>
            <IconButton onClick={() => callEditContactQuery()} edge="end" aria-label="done" className="Right-icon">
                <DoneIcon/>
            </IconButton>
            </>
        }/>

        <Fade in={true} timeout={250}>
        <List className="">
            <ListItem alignItems="center">
                <Grid container spacing={0} alignItems="flex-end">
                    <Grid item>
                        <ListItemAvatar>
                            <Avatar src={contact.avatarPath} />
                        </ListItemAvatar>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField fullWidth value={contact.avatarPath} placeholder="Image Source" onChange={e => setContact({...contact, avatarPath: e.target.value})}/>
                    </Grid>
                </Grid>
            </ListItem>
            <ListItem alignItems="flex-start">
                <Grid container spacing={4} alignItems="flex-end">
                    <Grid item>
                        <TextField value={contact.firstName} placeholder="First Name" onChange={e => setContact({...contact, firstName: e.target.value})}/>
                    </Grid>
                    <Grid item>
                        <TextField value={contact.lastName} placeholder="Last Name" onChange={e => setContact({...contact, lastName: e.target.value})}/>
                    </Grid>
                </Grid>
            </ListItem>
            <ListItem alignItems="flex-start">
                <Grid container spacing={4} alignItems="flex-end">
                    <Grid item>
                        <PhoneIcon />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField fullWidth value={phoneNumber} placeholder="Phone Number" onChange={e => formatPhoneNumber(e.target.value)}/>
                    </Grid>
                </Grid>
            </ListItem>
            <ListItem alignItems="flex-start">
                <Grid container spacing={4} alignItems="flex-end">
                    <Grid item>
                        <EmailIcon />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField fullWidth value={contact.emailAddress} placeholder="Email Address" onChange={e => setContact({...contact, emailAddress: e.target.value})}/>
                    </Grid>
                </Grid>
            </ListItem>
        </List>
        </Fade>
        <Button color="secondary" disableElevation onClick={() => callDeleteContactQuery()}><DeleteForeverIcon/>&nbsp; Delete Contact</Button>
        </>
    );
}