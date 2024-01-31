import { styles } from "./style.js";
import signin from '../../../assets/images/signIn.png';
import Image from "../../../shared/Image";
import SignInCard from "./SignInCard";
const SignIn = ({ userDetails, error, handleChange, handleSubmit  }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Image
            image={signin}
            className='m-auto rounded-2xl shadow-md '
            imageText='Banner 1'
          />
        </div>
        <div className={styles.rightContainer}>
          <SignInCard userDetails={userDetails} error={error} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
      </div>
    </>
  );
}
export default SignIn;