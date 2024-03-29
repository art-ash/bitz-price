import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Price from "../components/Price";

const Index = ({ bpi }) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Price bpi={ bpi } />
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
