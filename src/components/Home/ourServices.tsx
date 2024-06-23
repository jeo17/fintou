import { ourServicesdata } from "../../assets/servicesData";

const ourServices = () => {
  return (
    <div  className="flex flex-col items-center justify-center gap-[15px] px-[75px] md:px-[120px]">
      <h5 className="text-[#047CD1] text-[22px] leading-[32px]">خدماتنا</h5>
      <h2 className="md:text-[46px] text-[30px] font-semibold ">كل ما تحتاج إليه</h2>
      <div className="mt-10 flex gap-[60px] flex-wrap items-center justify-center">
        {ourServicesdata.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center gap-[29px] w-[294px] text-[22px] hover:bg-[#047CD1] py-[40px] rounded-[10px] transition-all duration-[850ms] hover:text-white">
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: item.Svg }}
              />{" "}
              {item.title}
            </div>
          );
        })}
      </div>
      <button className="border-[#047CD1] border-[2px]  flex items-center gap-[15px] px-[26px] leading-[44px] rounded-[4px] text-[20px] mt-10">
            استأجرالآن
            <svg
             className=" rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="12"
              viewBox="0 0 27 8"
              fill="none"
            >
              <path
                id="Icon"
                d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                fill="#000"
              />
            </svg>
          </button>
    </div>
  );
};

export default ourServices;
