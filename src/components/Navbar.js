import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

//it contain an icon of app and button to navigate add contact page and we have styled in from navbar.module.css

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            className={styles.logo}
            alt=""
            src="https://cdn-icons-png.flaticon.com/128/2444/2444417.png"
          />
        </Link>
      </div>
      <div className={styles.rightNav}>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to="/addContact">Add Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
