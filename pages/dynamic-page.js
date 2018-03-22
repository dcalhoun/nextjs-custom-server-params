import Layout from '../components/Layout';

const DynamicPage = props => (
  <Layout>Hello, Dynamic Page: {props.token}!</Layout>
);

DynamicPage.getInitialProps = async ({ query }) => {
  return { token: query.token };
};

export default DynamicPage;
