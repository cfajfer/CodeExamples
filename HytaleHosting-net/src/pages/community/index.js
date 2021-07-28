import Layout from '../../components/Layout';
import Link from 'next/link';

const Community = () => {
    return (
        <Layout>
            <section className="margin error">
                <div className="heading-container u-center-text">
                    <h1 className="heading-primary heading-primary--large"><span className="u-color-primary">Coming Soon!</span></h1>
                    <img src="/comingsoon.gif" alt="coming soon..." width="200px"/>
                    <p className="heading-primary__sub heading-primary__sub--large">Our community page is under construction as we gear up for Hytales release. Stay tuned!</p>
                </div>
                <Link href="/">
                    <a className="btn">Return to Home</a>
                </Link>
            </section>
        </Layout>
    );
}
 
export default Community;