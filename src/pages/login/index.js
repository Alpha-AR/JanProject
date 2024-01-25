import { styles } from "./style.js";
import { LoginBGImage } from '../../assets/images';

import LogInCard from "../../shared/logInCard/index.js";
export default function login() {
return(
<>
<div className={styles.container}>
  <div className={styles.imageleft}>
      <LoginBGImage/>
  </div>
  <div className={styles.rightcontainer}>
        <LogInCard/>
  </div>
</div>
</>
    );
  }