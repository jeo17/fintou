const footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#047CD1] relative mt-[100px] rounded-tl-[20px] text-center rounded-tr-[20px] w-full px-[6vw] lg:px-[15vw] py-[30px] md:py-[80px] gap-[40px]">
      <div className=" flex items-center gap-[25px] md:gap-[42px]  w-full ">
        <img src="/logo.png" alt="logo" className="sm:w-[170px] w-[30vw]" />
        <div className="flex flex-col items-center gap-[25px]">
          <span className="text-white md:text-[24px] sm:text-[22px] text-[18px]">
            توصيلك بمحترفي الخدمة المنزلية الموثوقين
          </span>
          <div className="text-white  items-center gap-[8px] sm:flex hidden">
            <span>© 2024 فاين تو.</span> <span>جميع الحقوق محفوظة.</span>
          </div>
        </div>

      </div>
      <div className="text-white  items-center gap-[8px] flex sm:hidden ">
        <span>© 2024 فاين تو.</span> <span>جميع الحقوق محفوظة.</span>
      </div>
          <img
          src="/footer.png"
          alt="vector"
          className="absolute  bottom-0 left-20 lg:inline-block hidden"
        />
    </div>
  );
};

export default footer;
