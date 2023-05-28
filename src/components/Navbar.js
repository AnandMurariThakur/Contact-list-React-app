import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

// Component for the navigation bar
// It contains an app icon and a button to navigate to the Add Contact page
// The styling is defined in the navbar.module.css file

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        {/* Link to navigate back to the home page */}
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
            {/* Link to navigate to the Add Contact page */}
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
