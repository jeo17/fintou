const hero = () => {
  return (
    <div className="hero h-[85vh] sm:h-[92vh] flex items-center pt-[30px] px-[40px] md:px-[85px] lg:px-[150px] w-full">
      <div className="flex flex-col items-center gap-[22px] w-full">
        <img src="/logo.png" alt="logo" className="md:w-[170px] w-[132px] " />
        <h2 className="text-[#43d2ff] text-[25px] md:text-[34px] lg:text-[40px] font-semibold text-center">
          ابحث عن متخصصين لتلبية جميع احتياجات منزلك <br /> بدءًا من السباكة
          وحتى الطلاء، بنقرة واحدة .
        </h2>
        <div className="w-full flex justify-center">
          <button className="bg-[#2aa5f5] flex items-center gap-[15px] md:px-[26px] px-[19px] leading-[44px] rounded-[2px] md:text-[20px] text-[18px] text-white mt-10 ">
            استأجر الآن
            <svg
             className=" rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 27 8"
              fill="none"
            >
              <path
                id="Icon"
                d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
