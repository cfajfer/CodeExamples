import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

const Terms = () => {

    return (
        <AboutTemplate
            title={<>Terms of <span className="u-color-primary">Service</span></>}
            subtitle="The terminology of your servicology">
                
            <p>terms of service here</p>

        </AboutTemplate>
    );
}
 
export default Terms;