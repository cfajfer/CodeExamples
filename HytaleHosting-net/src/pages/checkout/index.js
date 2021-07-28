import Checkout from '../../components/Checkout';
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const CheckoutPage = () => {
    return (
        <Layout>
            <Section margin={true}>
                <Checkout />
            </Section>
        </Layout>
    );
}
 
export default CheckoutPage;