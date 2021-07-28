import React, { useState } from "react";
import AWS  from 'aws-sdk';
import AboutTemplate from './AboutTemplate';
import Popup from 'reactjs-popup';

AWS.config.update({
    accessKeyId: 'AKIARAVKGDCCFJJFR7M4',
    secretAccessKey: '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',
    region: 'us-east-1'
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

//
// ContactForm Component
//
const ContactForm = (props) => {

    const [data, setData] = useState({
        formData: {
            fullname: '',
            emailaddress: '',
            youtube: '',
            twitter: '',
            discordserver: '',
            discordaccount: '',
            website: '',
            subreddit: '',
            twitch: '',
            twitter: '',
            instagram: '',
            personalizeprovide: '',
            personalizeoffer: '',
            personalizehear: '',
            personalizeother: '',
            message: '',
            subject: ''
        }
    });

    const contentStyle = { background:"#14172c", border:"2px solid #00c2ff", padding:"2rem", height:"fit-content", borderRadius:"4px", color:"fff", textAlign:"center" };
    const overlayStyle = { background: "rgba(0,0,0,0.5)" };
    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const sesEmail = () => {
        let params = {
            Source: 'support@hytalehosting.org',
            Destination: {
                ToAddresses: [
                'support@hytalehosting.org'
                ]
            },
            ReplyToAddresses: [
                'support@hytalehosting.org',
            ],
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data:   props.contact === "aboutus" ?
                                `<div>
                                    <b>Name: </b> <br/> ${data.fullname}<br/><br/> <b>Email: </b> <br/> ${data.emailaddress}<br/><br/> <b>Subject: </b> <br/> ${data.subject}<br/><br/> <b>Message: </b> <br/> ${data.message}
                                </div>`
                                :
                                `<div>
                                    <b>Name: </b> <br/> ${data.fullname}<br/><br/> <b>Email: </b> <br/> ${data.emailaddress}<br/><br/> <b>Youtube: </b> <br/> ${data.youtube}<br/><br/> <b>Twitter: </b> <br/> ${data.twitter}<br/><br/> <b>Discord Server: </b> <br/> ${data.discordserver}<br/><br/> <b>Discord Account: </b> <br/> ${data.discordaccount}<br/><br/> <b>Website: </b> <br/> ${data.website}<br/><br/>
                                    <b>Subreddit: </b> <br/> ${data.subreddit}<br/><br/> <b>Twitch: </b> <br/> ${data.twitch}<br/><br/> <b>Instagram: </b> <br/> ${data.instagram}<br/><br/> <b>Provide: </b> <br/> ${data.personalizeprovide}<br/><br/> <b>Offer: </b> <br/> ${data.personalizeoffer}<br/><br/> <b>Hear: </b> <br/> ${data.personalizehear}<br/><br/> <b>Other: </b> <br/> ${data.personalizeother}<br/><br/>
                                </div>`
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: '**NEW PARTNER APPLICATION**'
                }
            }
        };
        ses.sendEmail(params).promise().then().catch((err) =>{throw new Error(err)});
        setOpen(true);
        setIsDisabled(true);
    }

    const formElement = (type, size, required, placeholder, label, name) => {
        return (
            <div className={`form__element${required ? ' form__element--required' : ''} ${size ? `form__element--${size}` : 'form__element--100'}`}>
                {type === 'textarea'
                    ? <textarea type="text" className="form__textarea" name={name} placeholder={placeholder} onChange={(event) => setData(prevState => ({...prevState, [event.target.name]: event.target.value}))}/>
                    : <input type="text" className="form__input" name={name} placeholder={placeholder} onChange={(event) => setData(prevState => ({...prevState, [event.target.name]: event.target.value}))}/>}
                <label htmlFor={name} className="form__label">{label}</label>
            </div>
        );
    }

    return (
        props.contact === "aboutus"
        ?
        <AboutTemplate
        title={<>Contact <span className="u-color-primary">Us</span></>}
        subtitle="Get in touch!">
            <p className="about-us__section-description">We're ready and waiting for your questions!</p>
            <form className="form u-margin-top-gutter">
                <div className="form__section">
                    {formElement(
                        "text",
                        50,
                        true,
                        "Your Name..",
                        "NAME",
                        "fullname"
                    )}
                    {formElement(
                        "text",
                        50,
                        true,
                        "Email Address..",
                        "EMAIL",
                        "emailaddress"
                    )}
                    {formElement(
                        "text",
                        true,
                        50,
                        "Your message..",
                        "SUBJECT",
                        "subject"
                    )}
                    {formElement(
                        "textarea",
                        100,
                        true,
                        "Your message..",
                        "MESSAGE",
                        "message"
                    )}
                </div>
                <div className="form__element u-remove-margin">
                    <button className="form__button btn" disabled={isDisabled} onClick={sesEmail}>Submit</button>
                </div>
            </form>
            <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)} {...{contentStyle, overlayStyle}} positon="center center">
                <div>
                    <b><h3>Thank you for submitting a partnership application!</h3></b>
                    <br/>
                    <h4>We will reach out to you as soon as possible via email regarding the status of your application.</h4>
                </div>
            </Popup>
        </AboutTemplate>
        :        
        <div className="form form--section card card--translucent u-margin-bottom-gutter u-margin-top-gutter">
            <div className="form__header">
                <h4 className="form__title">Contact <span className="u-color-primary">Information</span></h4>
                <p className="form__subtitle">Fill in all that may apply!</p>
            </div>
            <div className="form__section">
                {formElement(
                    "text",
                    50,
                    true,
                    "Your Name..",
                    "FULL NAME",
                    "fullname"
                )}

                {formElement(
                    "text",
                    50,
                    true,
                    "Email Address..",
                    "EMAIL ADDRESS",
                    "emailaddress"
                )}
            </div>

            <div className="form__header">
                <h4 className="form__title">Social <span className="u-color-primary">Presence</span></h4>
                <p className="form__subtitle">Fill in all that may apply!</p>
            </div>
            <div className="form__section">
                {formElement(
                    "text",
                    50,
                    false,
                    "Youtube link...",
                    "YOUTUBE",
                    "youtube"
                )}
                {formElement(
                    "text",
                    50,
                    false,
                    "Twitter...",
                    "TWITTER",
                    "twitter"
                )}
                {formElement(
                    "text",
                    50,
                    false,
                    "Discord Server...",
                    "DISCORD SERVER",
                    "discordserver"
                )}
                {formElement(
                    "text",
                    50,
                    false,
                    "Discord Account...",
                    "DISCORD ACCOUNT",
                    "discordaccount"
                )}
                {formElement(
                    "text",
                    50,
                    false,
                    "Website...",
                    "WEBSITE",
                    "website"
                )}
                {formElement(
                    "text",
                    50,
                    false,
                    "Subreddit...",
                    "SUBREDDIT",
                    "subreddit"
                )}
                {formElement(
                    "text",
                    50,
                    false,
                    "Twitch...",
                    "TWITCH",
                    "twitch"
                )}
                {formElement(
                    "text",
                    50,
                    false,
                    "Instagram...",
                    "INSTAGRAM",
                    "instagram"
                )}
            </div>
            <div className="form__header">
                <h4 className="form__title">Personalize <span className="u-color-primary">Application</span></h4>
            </div>
            <div className="form__section">
                <div className="form__section-inner">
                    {formElement(
                        "textarea",
                        100,
                        false,
                        "What can we provide?",
                        "What would you like Hytale Hosting to provide for you?",
                        "personalizeprovide"
                    )}
                    {formElement(
                        "textarea",
                        100,
                        false,
                        "What can you offer?",
                        "What can you offer Hytale Hosting?",
                        "personalizeoffer"
                    )}
                    {formElement(
                        "textarea",
                        100,
                        false,
                        "How did you hear?",
                        "How did you hear about Hytale Hosting?",
                        "personalizehear"
                    )}
                    {formElement(
                        "textarea",
                        100,
                        false,
                        "Anything else?",
                        "Is there anything else you'd like us to know?",
                        "personalizeother"
                    )}
                </div>
                <img src="/gaia-youtube.png" alt="Gaia" className="form__section-image"/>
            </div>
            <div className="form__section">
                <div className="form__element">
                    <button disabled={isDisabled} className="form__button btn" onClick={sesEmail}>Submit</button>
                </div>
            </div>
        <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)} {...{contentStyle, overlayStyle}} positon="center center">
            <div>
                <b><h3>Thank you for submitting a partnership application!</h3></b>
                <br/>
                <h4>We will reach out to you as soon as possible via email regarding the status of your application.</h4>
            </div>
        </Popup>
        </div>
    );
}

export default ContactForm;