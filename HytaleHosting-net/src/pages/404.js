import Layout from '../components/Layout';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <Layout>
            <section className="margin error">
                <div className="heading-container u-center-text">
                    <h1 className="heading-primary heading-primary--large"><span className="u-color-primary">404 Error</span></h1>
                    <p className="heading-primary__sub heading-primary__sub--large">The page you are looking for does not exist or has been removed.</p>
                </div>
                <Link href="/">
                    <a className="btn">Return to Home</a>
                </Link>
            </section>
        </Layout>
    );
}
 
export default Custom404;