import React, { useState } from "react";

import styles from "./topheader.module.css";
import logo from "../assets/logo/logo.png";
import { IconMenuDeep } from "@tabler/icons-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleResponsiveClass = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.headerBlock}>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <div className="">
            <a href="/">
              <img width={"30px"} src={logo} alt="logo" />
            </a>
          </div>
          <div className="">
            <p>ynamo</p>
          </div>
        </div>

        <div>
          <ul
            className={`${styles.headerMenu} ${
              menuOpen ? styles.menuclass : ""
            }`}
          >
            {/* <li>
           <a href="/home" className="active">
                Home
              </a>
            </li> */}
            <li>
              <a href="/services" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="active">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolios" className="active">
                Portfolios
              </a>
            </li>
            <li>
              <a href="/about" className="active">
                About
              </a>
            </li>
            <li>
              <a href="/careers" className="active">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="active">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a className={styles.icon} onClick={toggleResponsiveClass}>
          <IconMenuDeep stroke={2} />
        </a>
      </div>
    </div>
  );
};

export default Header;
