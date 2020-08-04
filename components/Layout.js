import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Bitsprice</title>
        <link
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
