import { styles } from "./style.js";
import { signInImg } from "../../../assets/images";
import { Image } from "../../../shared";
import SignInCard from "./SignInCard.js";
const SignIn = ({ userDetails, error, handleChange, handleSubmit }) => {
  return (
    <>
      <div className={`${styles.container} h-[86vh]`}>
        <div className={styles.leftContainer}>
          <Image image={signInImg} className="m-auto" imageText="Banner 1" />
        </div>
        <div className={styles.rightContainer}>
          <SignInCard
            userDetails={userDetails}
            error={error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
export default SignIn;
