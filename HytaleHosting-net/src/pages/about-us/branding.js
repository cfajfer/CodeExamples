import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

const Branding = () => {

    return (
        <AboutTemplate
            title={<>Our <span className="u-color-primary">Branding</span></>}
            subtitle="Get to know us as a company.">
                
            <p>branding us goes here</p>

        </AboutTemplate>
    );
}
 
export default Branding;