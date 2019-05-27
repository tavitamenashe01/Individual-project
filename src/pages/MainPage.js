import React, { Component, Fragment } from "react";
import { VideoBg, Layout, MainText } from "../components";
import "../components/styles/MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <VideoBg />
        <Layout>
        <MainText />
        </Layout>
        {/* <Layout>
          <Header/>
          <Heading />
          <Categories />
        </Layout> */}
      </Fragment>
    );
  }
}

export default MainPage;