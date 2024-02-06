import React from "react";
import Link from "next/link";
import { linkedinIcon} from "../../assets/images";
import { styles } from "./style.js";
import Button from "../Button/index.js";
import Image from "../Image/index.js";
import { useAuth } from "../../utils/useAuth.js";
import { customToast } from "../../utils/helper.js";

const Header = ({ text }) => {
   const { setUserName } = useAuth();

   const handleLogout = () => {
      localStorage.setItem(
         "credentials",
         JSON.stringify({
            ...JSON.parse(localStorage.getItem("credentials")),
            isLoggedIn: 0,
         })
      );
      setUserName(null);
      customToast("Logged Out!",'casual')
   };

   return (
      <nav className={styles.navbar}>
         <div className="flex items-center justify-center">
            <div className={styles.container}>
               <div className={styles.logoWrapper}>
                  <Link href="/">
                     <Image image={linkedinIcon} className="w-28 h-10 object-contain" imageText="Company Icon" />
                  </Link>
               </div>
               <div className={styles.links}>
                  <Link href="/" className={styles.link}>
                     HOME
                  </Link>
                  <Link href="/jobs" className={styles.link}>
                     JOBS
                  </Link>
               </div>
            </div>
            <div>
               {text ? (
                 <Button className={`${styles.btn} flex flex-row-reverse`} text="LOGOUT ►" onClick={handleLogout}/>
               ) : (
                  <Link href="/SignIn" className={styles.link}>
                     <Button className={`${styles.btn} flex flex-row-reverse`} text="SIGN IN" />
                  </Link>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Header;
