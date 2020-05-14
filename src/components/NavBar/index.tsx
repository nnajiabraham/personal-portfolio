import React from "react";
import { Link } from "react-router-dom";
import CSSTypes from "../../Types";

const styles: CSSTypes = {
  nav: {
    width: "100vw",
    height: "5%",
    marginTop: 0,
  },
  ul: {
    margin: 0,
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    listStyleType: "none",
  },
  li: {
    marginRight: "15px",
  },
  link: {
    fontSize: "18px",
    fontWeight: 500,
    color: "#e4ff00",
    textDecoration: "none",
  },
};

const NavBar: React.FC<{
  routes: string[];
}> = ({ routes }) => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        {routes.map((route, index) => (
          <li key={index} style={styles.li}>
            {route.toLowerCase() === "home" ? (
              <Link to="/" style={styles.link}>
                {route}
              </Link>
            ) : (
              <Link to={`/${route.toLowerCase()}`} style={styles.link}>
                {route}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
