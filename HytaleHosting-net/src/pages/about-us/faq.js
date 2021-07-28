import React, { Component } from 'react';
import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

import FaqQuestion from '../../components/FaqQuestion';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null,
            questions: [
                {
                    question: 'How long will it take to setup my server?',
                    answer: <p>Your server will be setup instantaneously following purchase confirmation. Players should then be able to connect within a matter of seconds.</p>
                },
                {
                    question: 'Can I upgrade/downgrade my server?',
                    answer: <p>Certainly! You can upgrade or downgrade your server whenever you wish from within your Client Panel. Learn More!</p>
                },
                {
                    question: 'What is your refund policy?',
                    answer: <p>We provide FULL and immediate refunds within 48 hours following any purchase, for any reason. No questions asked!</p>
                },
                {
                    question: 'What forms of payment do you accept?',
                    answer: <p>We accept all debit/credit cards endorsed by VISA, Discover, and Mastercard, as well as PayPal, and Bitcoin.</p>
                },
                {
                    question: 'Can you help me grow my Hytale server?',
                    answer: <p>Yes! We offer an addon which provides fully automated marketing and exposure for your server on various sites within the broader Hytale Hub Network.</p>
                },
                {
                    question: 'Can I convert my Minecraft builds into Hytale?',
                    answer: <p>Yes! You can add as many secondary accounts for your server’s staff members as you’d like, and can also customize their permissions and access levels.</p>
                },
                {
                    question: 'Can I add sub-accounts to my control panel?',
                    answer: <p>Yes! You can add as many secondary accounts for your server's staff members as you'd like and also customize their permissions and access levels.</p>
                }
            ]
        }
    }

    openQuestion = () => {
        this.setState({

        })
    }

    render() {
        return (
            <AboutTemplate
                title={<>Frequently Asked <span className="u-color-primary">Questions</span></>}
                subtitle="What's on your mind?">
                <p className="about-us__section-description">Below is a list of some of the most frequently asked questions we receive from clients. For more in-depth tutorials and guides, please be sure to check out our Knowledgebase. Alternatively, you can also submit a Support Ticket any time.</p>
                <ul className="about-us__faq-list">
                    {this.state.questions.map(cur => (
                        <FaqQuestion
                            question={cur.question}
                            answer={cur.answer} />
                    ))}
                </ul>
            </AboutTemplate>
        );
    }
}
 
export default FAQ;