import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

const ServerSpecs = () => {

    return (
        <AboutTemplate
            title={<>Learn about our <span className="u-color-primary">Server Specs</span></>}
            subtitle="The more you know!">
                
            <p>server specs here</p>

        </AboutTemplate>
    );
}
 
export default ServerSpecs;