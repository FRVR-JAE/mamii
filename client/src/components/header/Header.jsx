import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaAffiliatetheme, FaShoppingCart } from "react-icons/fa";
import {HiOutlineMenuAlt3 } from "react-icons/hi";

export const Logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Mam<span>ii</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
        setShowMenu(!showMenu)
  }

  const hideMenu = () => {
       setShowMenu(false)
  }

  const cart = (
    <div className={styles.cart}>
      <Link to="/cart" className={styles.cartLink}>
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </div>
  );

  return (
    <header>
      <div className={styles.header}>
        {Logo}
        <nav className={showMenu ? `${styles["show-menu"]}` : `${styles["hiden-menu"]}`}>

          <div className={showMenu ? `${styles["snav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>

          </div>
          <ul>
            <li className={styles["logo-mobile"]}>
              {Logo}

            </li>
            <li>
              <NavLink to="/shop" className={activeLink}>
                Shop
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to={"login"} className={activeLink}>
                Login
              </NavLink>

              <NavLink to={"register"} className={activeLink}>
                Register
              </NavLink>

              <NavLink to={"order-history"} className={activeLink}>
                My Order
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
            {cart} 
            <HiOutlineMenuAlt3 size={30} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
