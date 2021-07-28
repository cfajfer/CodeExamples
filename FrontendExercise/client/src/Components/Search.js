import {TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from 'react';
import '../Styles/Search.css';

export default function Search(props) {

    const [searchValue, setSearchValue] = useState();

    const handleChange = (value) => {
        setSearchValue(value);
        console.log(value);
        filter(value);
    }

    const filter = (value) => {
        const filteredContacts = props.allContacts.filter((contact) => {
            return (
                (contact.firstName.toLowerCase().includes(value.toLowerCase()) 
                || contact.lastName.toLowerCase().includes(value.toLowerCase()) 
                || contact.phoneNumber.includes(value) 
                || contact.emailAddress.toLowerCase().includes(value.toLowerCase()) ? true : false)
            )
          });
        props.ContactListSearchCallback(filteredContacts);
    }

    return(
        <TextField
          id="outlined-full-width"
          className="Search"
          placeholder="Search for a contact..."
          margin="normal"
          value={searchValue}
          onChange={(e) => handleChange(e.target.value)}
          InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            ),
          }}
          fullWidth
          variant="outlined"
        />
    );
}