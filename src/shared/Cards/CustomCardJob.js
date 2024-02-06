import Button from "../Button";
import { customToast } from "../../utils/helper";
const CustomCardJob = ({
  jobLogo,
  companyLogo,
  companyName,
  jobTitle,
  salary,
  jobDesc,
  className,
}) => {
  const notify = () => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    if (credentials && credentials.isLoggedIn == 1) {
      customToast( `Applied at ${text1}` , 'casual')
    } else {
      customToast("Please Sign In first", 'alert')
    }
  };

  return (
    <div
      className={` ${className} justify-stretch bg-gradient-to-r from-white to-gray-100 w-64 h-96 flex flex-col rounded-2xl transition duration-300 overflow-hidden shadow-sm shadow-black text-gray-800 text-base opacity-85 hover:border-gray-700 hover:opacity-100 hover:shadow-2xl hover:from-gray-100 hover:to-white`}
    >
      <img
        className="w-contain h-40 border-b border-gray-700"
        src={jobLogo.src}
        alt="role-image"
      />
      <div className=" p-4">
        <div className="grid grid-cols-[1fr_3fr]">
          <img
            src={companyLogo.src}
            alt="company-icon"
            className="rounded-full border border-black "
          />
          <div className="font-bold text-2xl flex items-center justify-center">
            {companyName}
          </div>
        </div>
        <div className="font-bold flex justify-between pt-2">
          <div className="text-start text-lg">{jobTitle}</div>
          <div className="text-end text-lg">{salary}</div>
        </div>
        <p className=" text-gray-600 text-base text-justify line-clamp-2 ">
          {jobDesc}
        </p>
        <Button
          className=" p-2 mt-2 border shadow-black hover:border-gray-200 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-95 w-full  hover:opacity-100 hover:shadow-xl text-blue-50 font-bold hover:from-cyan-500 hover:to-blue-500 focus:shadow-inner "
          text="APPLY"
          onClick={notify}
        />
      </div>
    </div>
  );
};

export default CustomCardJob;
