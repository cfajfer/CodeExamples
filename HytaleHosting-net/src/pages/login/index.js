import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Link from 'next/link';

const Login = () => {
    return (
        <Layout>
            <Section name="section--overlay error" margin={true}>
                <div className="heading-container u-center-text">
                    <img src="/comingsoon.gif" alt="coming soon..." width="200px"/>
                    <h1 className="heading-primary"><span className="u-color-primary">Coming Soon!</span></h1>
                    <p className="heading-primary__sub" style={{marginTop: '1.2rem'}}>Our login system is under construction as we gear up for Hytale's release. Stay tuned!</p>
                    <Link href="/">
                        <a className="btn u-margin-top-gutter">Return to Home</a>
                    </Link>
                </div>
            </Section>
        </Layout>
    );
}
 
export default Login;