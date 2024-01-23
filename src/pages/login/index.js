import { styles } from "./loginstyles.js";
import login_bg from '../../assets/images/login_bg.png'
// import signin from "./SignIn.js";
import SignIn from "./SignIn.js";
export default function login() {
return(
<>
<div className={styles.container}>
  <div className={styles.imageleft}>
        <img
        src={login_bg.src}
        className={styles.image}
        ></img>
  </div>
  <div className={styles.rightcontainer}>
    {/* <h1 className={styles.boldtext}>SIGN IN</h1> */}
      <SignIn/>
  </div>
</div>
</>
    );
  }