import uber from './uber.png'
import ola from './ola.png'
import paytm from './paytm.png'
import linkedin from './linkedin.png'
import bg from './homeBG.png'
import loginBG from './loginBG.png'
// import uber from './uber.png'

import React from 'react';

// Import all image files
import banner1 from './banner1.png';
import banner2 from './banner2.png';
// Add more imports for other images

// Define individual image components
export const Banner1Image = () => <img src={banner1.src} className="w-50 h-50 b-10" alt="Banner 1"/>;
export const LinkedinIcon = () => <img src={linkedin.src} className='w-28 h-10 object-contain' alt="Company Icon" />;
export const LoginBGImage = () => <img src={loginBG.src} className='m-auto rounded-md shadowx-x ' alt="Login page image" />;
// export const img1 = () => <img src={ola.src} className=''
// Add more exports for other images

// You can also export an object with all image components
const imageComponents = {
  Banner1Image,
  LinkedinIcon,
  LoginBGImage,
//   Banner2Image,
  // Add more image components
};

export default imageComponents;
