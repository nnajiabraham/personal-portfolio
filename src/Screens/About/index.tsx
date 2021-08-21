import React from "react";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import medium from "../../assets/icons/medium.svg";
import twitter from "../../assets/icons/twitter.svg";
import CSSTypes from "../../Types";

const styles: CSSTypes = {
  div: {
    display: "flex",
    maxHeight: "100%",
    color: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100%",
  },
  mainContent: {
    display: "flex",
    fontFamily: "RobotoCondensed",
    fontSize: "2vh",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "75vw",
    marginRight: "7vw",
    marginLeft: "7vw",
  },
  h2: {
    fontFamily: "PlayfairDisplay",
  },
  nameHeader: {
    fontFamily: "PlayfairDisplay",
    fontSize: "9vw",
    textAlign: "center",
    marginBottom: "0",
    width: "100%",
  },
  workLink: {
    textDecoration: "none",
    fontFamily: "Oswald",
    fontSize: "20px",
    color: "rgb(133, 253, 153)",
  },
  socialLink: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    color: "#fff",
  },
};

const About = () => {
  return (
    <div style={styles.div}>
      <div style={styles.mainContent}>
        <section>
          <h2 style={styles.h2}>About Me...</h2>
          <p>
            I am a full stack developer currently living in Winnipeg, Canada.
          </p>
          <p>
            I have been building web applications for over 6 years and have been
            doing so professionally for 3 years in Canada. I also contribute to
            open source projects, tutor college CS students privately and work
            on personal hack project on my free time.
          </p>
          <p>
            I currently work as a FullStack Software Engineer at{" "}
            <a
              href={"https://biorender.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              style={styles.workLink}
            >
              {`Biorender`}
            </a>
            .
          </p>
        </section>
        <section>
          <p>
            If you’re interested in my open source contributions or/and my
            personal projects take a look at my GitHub profile or follow me on
            Twitter. If you’re interested in my professional work you can
            connect with me on LinkedIn or shoot me an email.
          </p>
        </section>
        <section style={styles.socialLink}>
          <a
            href={"https://www.github.com/nnajiabraham"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={github} alt="Github link" />
          </a>
          <a
            href={"https://www.linkedin.com/in/nnajiabraham"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={linkedin} alt="Linkedin link" />
          </a>
          <a
            href={"https://www.medium.com/@nnajiabraham"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={medium} alt="Medium link" />
          </a>
          <a
            href={"https://www.twitter.com/nnajiabraham"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            style={styles.workLink}
          >
            <img height="32" width="32" src={twitter} alt="Twitter link" />
          </a>
        </section>
      </div>
      <section>
        <h1 style={styles.nameHeader}>ABRAHAM NNAJI</h1>
      </section>
    </div>
  );
};

export default About;
