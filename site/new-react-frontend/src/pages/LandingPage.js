import { useCallback } from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Personality Quiz" to the project
  }, []);

  const navigate = useNavigate();

  const onLogInClick = () => { 
    navigate("/");
  };
  const onSignUpClick = () => { 
    navigate("/sign-up-page");
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.loginpagerectangleParent}>
        <div className={styles.loginpagerectangle}>
          <div className={styles.loginpagerectangle1} />
        </div>
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
          <div className={styles.loginbtn}>
            <div className={styles.loginbtnChild} onClick={onRectangleClick} />
            <i className={styles.contactUs}>Contact us</i>
          </div>
        </div>
        <i className={styles.personalitygptIsAContainer}>
          <p className={styles.personalitygptIsA}>
            PersonalityGPT is a AI that can give you
          </p>
          <p className={styles.personalitygptIsA}>
            personalized responses to help solve misunderstandings
          </p>
          <p className={styles.personalitygptIsA}>
            and close the communication gap in everyday texting!
          </p>
        </i>
        <button className={styles.loginbtn1} id="signupbutton" onClick={onSignUpClick}>
          <div className={styles.loginbtnItem} />
          <i className={styles.signUp}>Sign Up</i>
        </button>
        <button className={styles.loginbtn2} id="loginbutton" onClick={onLogInClick}>
          <div className={styles.loginbtn3}>
            <div className={styles.loginbtnItem} />
            <i className={styles.signUp}>Log In</i>
          </div>
        </button>
        <div className={styles.welcomeToPersonalitygpt}>
          <div className={styles.loginbtn3}>
            <i className={styles.welcomeToPersonalitygptContainer}>
              <p className={styles.howToUse}>How to use:</p>
              <p className={styles.personalitygptIsA}>&nbsp;</p>
              <p className={styles.personalitygptIsA}>&nbsp;</p>
            </i>
          </div>
        </div>
        <div className={styles.welcomeToPersonalitygpt2}>
          <div className={styles.loginbtn3}>
            <i className={styles.welcomeToPersonalitygptContainer1}>
              <ol className={styles.createAccount}>
                <li>Create Account</li>
              </ol>
            </i>
          </div>
        </div>
        <div className={styles.welcomeToPersonalitygpt4}>
          <div className={styles.loginbtn3}>
            <i className={styles.welcomeToPersonalitygptContainer1}>
              <ol className={styles.createAccount}>
                <li>Take a Personality Test</li>
              </ol>
            </i>
          </div>
        </div>
        <div className={styles.welcomeToPersonalitygpt6}>
          <i className={styles.welcomeToPersonalitygptContainer1}>
            <ol className={styles.createAccount}>
              <li>Get answers</li>
            </ol>
          </i>
        </div>
        <div className={styles.welcomeToPersonalitygpt7}>
          <div className={styles.welcomeToPersonalitygpt8}>IT’S THAT EASY!</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
