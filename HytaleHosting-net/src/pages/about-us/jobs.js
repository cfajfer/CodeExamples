import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

const Jobs = () => {

    const jobs = [
        {
            category: 'Development',
            positions: [
                'Front-end Web Designer',
                'System Administrator'
            ]
        },
        {
            category: 'Management',
            positions: [
                'Social Media Manager'
            ]
        },
        {
            category: 'Support',
            positions: [
                'General Support Representative (Entry Level)',
                'Technical Support Representative (Advanced Level)',
                'Billing Support Representative (Advanced Level)'
            ]
        }
    ]

    return (
        <AboutTemplate
            title={<>Apply for <span className="u-color-primary">Jobs</span></>}
            subtitle="See what jobs are going!">
                
                <p className="about-us__section-description">Hytale Hosting is seeking to become the number one game and web server hosting provider for Hytale server owners looking to stake their claim in the brand new Hypixel Studios game - Hytale.</p>
                <p className="about-us__section-description">Hytale Hosting is a fast growing, energetically-ran company with endorsement from some of the most prominent figures in the Hytale community. We are supported by a team of enthusiastic and talented individuals that collaborate and contribute remotely from all over the world. That said, we are always searching for new talented and motivated individuals looking to join our ranks, and become a part of the Hytale Hosting Team!</p>
                <p className="about-us__section-description">At Hytale Hosting, we are committed towards creating the best possible hosting experience for Hytale players, and server owners. We’ve made it our mission to constantly improve, and innovate upon old ideas in order to ensure that we are providing the Hytale community with all the resources necessary in order to enhance their servers to the greatest extent possible. We are also dedicated towards providing customers with the most personalized support available.</p>
                <p className="about-us__section-description u-margin-bottom-gutter">So, want to be a part of the company pioneering the way forwards for community servers in Hytale?</p>
                {jobs.map(category => (
                    <>
                        <h3 className="form__title about-us__jobs-title">{category.category}</h3>
                        <ul className="about-us__jobs-list">
                            {category.positions.map(job => (
                                <li>
                                    <a href="mailto:jobs@hytalehosting.org" className="btn">{job}</a>
                                </li>
                            ))}
                        </ul>
                    </>
                ))}
        </AboutTemplate>
    );
}
 
export default Jobs;