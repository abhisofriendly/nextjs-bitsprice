import Fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = (props) => {
  console.log(props.bpi.bpi);
  return (
    <div>
      <Layout>
        <div>
          <h1>Welcome to bitsprice</h1>
          <Prices bpi={props.bpi} />
          {props.bpi.time.updated}
        </div>
      </Layout>
    </div>
  );
};

Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  const data = await res.json();
  return {
    bpi: data,
  };
};

export default Index;
