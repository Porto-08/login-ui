import styles from "./styles.module.scss";

const SignUp = () => {
  function btn() {
    let input = document.querySelector("#password");
    
    if (input.getAttribute("type") === "password") {
      let eyeClosed = document.querySelector(".fa-eye-slash");
      eyeClosed.setAttribute("class", "far fa-eye");
      input.setAttribute("type", "text");
    } else if (input.getAttribute("type") === "text") {
      let eyeOpen = document.querySelector(".fa-eye");
      eyeOpen.setAttribute("class", "far fa-eye-slash");
      input.setAttribute("type", "password");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <header className="row">
            <div className="col-md-12">
              <div className={styles.headerContainer}>
                <h1>Create Your Account</h1>
                <p>
                  Choose from 130,000 online videos courses with new additions
                  published every second month
                </p>
              </div>
            </div>
          </header>

          <form className={styles.formContainer}>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="user"
                id="user"
                placeholder="Your username."
                required
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email."
                required
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Yout pin with 8 Digit."
                required
              />
              <i className="far fa-eye-slash" onClick={btn}></i>
            </div>

            <button className={styles.buttonBox} onClick={btn}>
              SingUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
