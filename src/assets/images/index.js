// import uber from './uber.png'
// import ola from './ola.png'
// import paytm from './paytm.png'
import linkedin from './linkedin.png'
// import bg from './homeBG.png'
// // import loginBG from './loginBG.png'

// import React from 'react';


export const uber = require('./uber.png').default;
export const banner1 = require('./banner1.png').default;
// export const linkedin = require('./linkedin.png').default;
export const LinkedinIcon = () => <img src={linkedin.src} className='w-28 h-10 object-contain' alt="Company Icon" />;
// export const Banner1Image = () => <img src={banner1.src} className="w-50 h-50 b-10" alt="Banner 1"/>;
// export const LoginBGImage = () => <img src={loginBG.src} className='m-auto rounded-md shadowx-x ' alt="Login page image" />;

// const imageComponents = {
//   Banner1Image,
//   LinkedinIcon,
//   // LoginBGImage,
// };

// export default imageComponents;
