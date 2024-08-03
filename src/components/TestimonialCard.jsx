import img17 from "../assets/icons/image 117.png";
import location from "../assets/icons/Location.png";

const TestimonialCard = ({ img }) => {
  return (
    <div className=" border rounded-[10px] overflow-hidden flex gap-3 md:w-[490px] w-[398px] h-[160px]   ">
      <div className="w-[130px] h-[140px] rounded-[8px] mt-[10px] ms-[10px]  ">
        <img src={img} alt="img" className="w-[130px] h-full " />
      </div>
      <div className="text-sm mt-3.5 px-3">
        <div className="flex gap-2 items-center">
          <img className="w-[14px] h-[14px]  " src={location} alt="img" />
          {"123 Elm Street, New York"}
        </div>
        <div className="text-gray-500 mt-2 md:w-[317px] w-[233px]">
          <h3 className="font-semibold mb-1">Healing Bodywork <span className="text-[#156BCA]">by Cort</span></h3>
          <span className="  ">
            Cort’s healing bodywork massage was absolutely transformative. Their
            intuitive touch and deep understanding of...<span className="text-[#156BCA]">Read More</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
