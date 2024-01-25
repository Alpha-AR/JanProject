
export default function CustomCard({ img1, img2, text1, text2, text3, text4 }) {
  return (
    <div className="max-w-sm rounded-2xl border border-gray-300 bg-stone-50 overflow-hidden shadow-lg text-gray-800 text-base opacity-80 hover:border-gray-700 hover:opacity-100   hover:shadow-2xl hover:bg-white ">
      <img className="w-full  h-1/2 " src={img1} alt="role-image" />
      
      <div className="w-full h-full p-4 ">
        
          <div className="grid grid-cols-[1fr_3fr]  ">

                  <img src={img2} alt="company-icon" className="rounded-full  relative h-full  " />
                  
                  <div className="font-bold text-2xl flex items-center justify-center">{text1}</div>
          </div>
            
            <div className="font-bold flex justify-between  pt-2 ">
                    <div className="text-start">{text2}</div>
                  <div className="text-end">{text3}</div>
            </div>
                  <p className="h-0">{text4}</p>
      </div>
    </div>
  );
}
//