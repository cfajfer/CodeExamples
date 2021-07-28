import React, { useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Check from "../assets/check.svg";
import Close from "../assets/close.svg";

import FormButton from "../assets/form-button.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Popup from 'reactjs-popup';

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
    const [open, setOpen] = useState(false);
    const contentStyle = { background:"#14172c", border:"2px solid #00c2ff", padding:"2rem", height:"fit-content", borderRadius:"4px", color:"fff", textAlign:"center"};
    const overlayStyle = { background: "rgba(0,0,0,0.5)" };
    let email;

    const submit = () => {
      email && email.value.indexOf("@") > -1 && onValidated({ EMAIL: email.value, });
      setOpen(true);
    }
  
    return (
        <React.Fragment>
            {status === "sending" && (
            <div className="form__inside-button">
                <Loader type="ThreeDots" color="#00FFF0" height={28} width={28} />
            </div>
            )}
            {status === "error" && (
            <div className="form__inside-button">
                  <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)} {...{contentStyle, overlayStyle}} positon="center center">
                    <div>
                        <b><h3 style={{color: "red"}}>Please enter a valid email address!</h3></b>
                    </div>
                </Popup>
                <Close />
            </div>
            )}
            {status === "success" && (
            <div className="form__inside-button">
                  <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)} {...{contentStyle, overlayStyle}} positon="center center">
                    <div>
                        <b><h3>Thank you for subscribing to the HytaleHosting.com newsletter!</h3></b>
                        <br/>
                        <h4>We will send you updates and special offers for Hytale servers.</h4>
                    </div>
                </Popup>
                <Check />
            </div>
            )}
            <input
            className="form__button-input"
            ref={node => (email = node)}
            type="email"
            placeholder="Enter Your Email Address..."
            />
            <button className="form__inside-button" onClick={submit}>
                <FormButton />
            </button>
        </React.Fragment>
    );
  };

const MailchimpForm = () => {
    const url = "https://gmail.us1.list-manage.com/subscribe/post?u=5d7fb9d3b0d48b98901cbfb1d&amp;id=efcdf6506b";

    return(
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    );
}

export default MailchimpForm;