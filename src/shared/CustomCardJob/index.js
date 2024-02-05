import Button from "../Button";
import toast from 'react-hot-toast';

const CustomCardJob = ({ img1, img2, text1, text2, text3, text4, className }) => {
  const notify = () => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if (credentials && credentials.isLoggedIn == 1) { 
      toast(`Applied at ${text1}`, {
        style: {
        backgroundColor: '#3b82f6', 
        color: 'white'
        }
      });
    }
    else {
      toast('Please Sign In first', {
        style: {
          backgroundColor: '#ef4444', 
          color: 'white'
        },
      });
    }
  }
  

  return (
    <div className={` ${className} bg-gradient-to-r from-white to-gray-100 w-64 h-96 flex flex-col rounded-2xl transition duration-300 overflow-hidden shadow-sm shadow-black text-gray-800 text-base opacity-85 hover:border-gray-700 hover:opacity-100 hover:shadow-2xl hover:from-gray-100 hover:to-white`}>
      <img className="w-contain h-40 border-b border-gray-700" src={img1.src} alt="role-image" />
      <div className=" p-4">
        <div className="grid grid-cols-[1fr_3fr]">
          <img src={img2.src} alt="company-icon" className="rounded-full border border-black " />
          <div className="font-bold text-2xl flex items-center justify-center">{text1}</div>
        </div>
        <div className="font-bold flex justify-between pt-2">
          <div className="text-start text-lg">{text2}</div>
          <div className="text-end text-lg">{text3}</div>
        </div>
        <p className=" text-gray-600 text-base text-justify line-clamp-2 ">{text4}</p> 
        <Button className=' p-2 mt-2 border shadow-black hover:border-gray-200 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-95 w-full  hover:opacity-100 hover:shadow-xl text-blue-50 font-bold hover:from-cyan-500 hover:to-blue-500 focus:shadow-inner ' text='APPLY' onClick={notify} />
      </div>
    </div>

  );
};

export default CustomCardJob;
