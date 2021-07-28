import Header from '../Components/Header';
import {Typography, IconButton, List, ListItem, ListItemAvatar, Avatar, TextField, Grid, Fade} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { useState } from 'react';
import Query from '../Utility/Query';


export default function AddCustomer(props) {

    const [newContact, setNewContact] = useState({
        "firstName": null,
        "lastName": null,
        "emailAddress": null,
        "phoneNumber": null,
        "avatarPath": null
    });
    const [phoneNumber, setPhoneNumber] = useState('');

    const formatPhoneNumber = (value) => {
        setPhoneNumber(value);
        setNewContact({...newContact, phoneNumber: value.substr(1,3) + value.substr(6,3) + value.substr(10,4)});
    }

    const callAddContactQuery = async() => {
        await Query('/user', 'post', JSON.stringify(newContact));
        props.AppCallbackSwitchView("ContactListView");
    }

    return (
        <>
        <Header content={
            <>
            <IconButton onClick={() => props.AppCallbackSwitchView("ContactListView")} edge="end" aria-label="close">
                <CloseIcon/>
            </IconButton>
            <Typography variant="h5" component="h1" className="Header-text">
                New Contact
            </Typography>
            <IconButton disabled={Object.values(newContact).every(element => element === null || element === '')} onClick={() => callAddContactQuery()} edge="end" aria-label="done" className="Right-icon">
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
                        <Avatar src={newContact.avatarPath} />
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth value={newContact.avatarPath} placeholder="Image Source" onChange={e => setNewContact({...newContact, avatarPath: e.target.value})}/>
                </Grid>
            </Grid>
            </ListItem>
            <ListItem alignItems="flex-start">
                <Grid container spacing={4} alignItems="flex-end">
                    <Grid item>
                        <TextField value={newContact.firstName} placeholder="First Name" onChange={e => setNewContact({...newContact, firstName: e.target.value})}/>
                    </Grid>
                    <Grid item>
                        <TextField value={newContact.lastName} placeholder="Last Name" onChange={e => setNewContact({...newContact, lastName: e.target.value})}/>
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
                        <TextField fullWidth value={newContact.emailAddress} placeholder="Email Address" onChange={e => setNewContact({...newContact, emailAddress: e.target.value})}/>
                    </Grid>
                </Grid>
            </ListItem>
        </List>
        </Fade>
        </>
    );
}