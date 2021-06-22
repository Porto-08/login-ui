import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <Link to='/'>
        <h3>Tract.</h3>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Category</Link>
          </li>
          <li>
            <Link to="/">Tract For Business</Link>
          </li>
          <li>
            <Link to="">Teach on Tract</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.searchBox}>
        <i class="fas fa-search"></i>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Nav;
