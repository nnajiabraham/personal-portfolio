import React from "react";
import CSSTypes from "../../Types";

const styles: CSSTypes = {
  div: {
    height: "100%",
  },
};

const About = () => {
  return (
    <div style={styles.div}>
      This is home
      <div>This is home</div>
      <div>This is home</div>
      <div>This is home</div>
    </div>
  );
};

export default About;
