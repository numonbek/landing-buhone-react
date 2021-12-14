import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Navbar = (props) => {
  return (
    <div className={styles.navlink}>
      <ul className={styles.navlink__list}>
        <li className={styles.navlink__li}>
          <NavLink to={`/`} className={setActive}>
            <span className={styles.navlink__title}>Главная</span>
          </NavLink>
        </li>
        <li className={styles.navlink__li}>
          <NavLink to={`/services`} className={setActive}>
            <span className={styles.navlink__title}>услуги</span>
          </NavLink>
        </li>
        <li className={styles.navlink__li}>
          <NavLink to={`/keys`} className={setActive}>
            <span className={styles.navlink__title}>кейсы</span>
          </NavLink>
        </li>
        <li className={styles.navlink__li}>
          <NavLink to={`/about`} className={setActive}>
            <span className={styles.navlink__title}>о компании</span>
          </NavLink>
        </li>
        <li className={styles.navlink__li}>
          <NavLink to={`/contacts`} className={setActive}>
            <span className={styles.navlink__title}>контакты</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };

// {props.text.flatMap((item) => {
//   console.log(item);
//   return (
//     <li>
//       {" "}
//       <NavLink to="/" className={setActive}>
//         {/* Home  */}
//         {item}
//       </NavLink>
//     </li>
//   );
// })}

/* {
  /* <li>
  {" "}
  <NavLink to="/services" className={setActive}>
    Services
  </NavLink>
</li>
<li>
  {" "}
  <NavLink to="/keys" className={setActive}>
    Keys
  </NavLink>
</li>
<li>
  {" "}
  <NavLink to="/about" className={setActive}>
    About
  </NavLink>
</li>
<li>
  {" "}
  <NavLink to="/contacts" className={setActive}>
    Contacts
  </NavLink>
</li> */
