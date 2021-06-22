import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <span>Privacy Policy</span>
        </div>

        <div>
          <span>&copy; Tract 2021</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
