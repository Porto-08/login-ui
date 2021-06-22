import styles from "./styles.module.scss";

const SignIn = () => {
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
      <header className="row">
        <div className="col-md-12">
          <div className={styles.headerContainer}>
            <h1>Login to Your Account</h1>
            <p>
              Choose from 130,000 online videos courses with new additions
              published every second month
            </p>
          </div>
        </div>
      </header>
      
      <div className="row">
        <div className="col-md-12">
          <div className={`row ${styles.collum}`}>
            <div className="col-md-5">
              <form className={styles.inputContainer}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    name="id"
                    placeholder="Teacher / Student ID"
                  />
                  <i class="far fa-circle"></i>
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="8 Digit Pin"
                  />
                  <i class="far fa-eye-slash" onClick={btn}></i>
                </div>

                <button className={styles.buttonBox}>
                  Login to Your Account
                  <i class="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>

            <div className="col-md-auto">
              <p>/</p>
            </div>

            <div className="col-md-5">
              <div className={styles.inputContainer}>
                <button className={styles.buttonBoxSocial}>
                  <i class="fab fa-google"></i>
                  Sign in with Google
                </button>

                <button className={styles.buttonBoxSocial}>
                  <i class="fab fa-facebook-f"></i>
                  Sign in with Facebook
                </button>

                <button className={styles.buttonBoxSocial}>
                  <i class="fab fa-apple"></i>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className={styles.password}>
            <p>Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
