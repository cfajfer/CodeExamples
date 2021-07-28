import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

const MBG = () => {

    return (
        <AboutTemplate
            title={<>Money Back <span className="u-color-primary">Guarantee</span></>}
            subtitle="Your safety with us">
                
            <p>money back guarantee here</p>

        </AboutTemplate>
    );
}
 
export default MBG;