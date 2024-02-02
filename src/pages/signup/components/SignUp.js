import { styles } from "./style.js";
import { signInImg } from '../../../assets/images';
import Image from "../../../shared/Image/index.js";
import SignUpCard from "./SignUpCard.js";

const SignUp = ({ userDetails, error, handleChange, handleSubmit }) => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Image
            image={signInImg}
            className='m-auto '
            imageText='Banner 1'
          />
        </div>
        <div className={styles.rightContainer}>
          <SignUpCard userDetails={userDetails} error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}
export default SignUp;