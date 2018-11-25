import React from "react";
import { Header } from "semantic-ui-react";

const styles = {
  minHeight: "100vh",
  paddingTop: "1em"
};

const Home = props => {
  return (
    <Header textAlign="center" style={styles}>
      Home
    </Header>
  );
};

export default Home;
