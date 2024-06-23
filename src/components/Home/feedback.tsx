import Rating from "@mui/material/Rating";
import * as React from "react";

const Feedback = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <div id="feedback" className="px-[30px] sm:px-[40px] md:px-[120px] flex items-center justify-center w-full">
      <div className="w-full p-[24px] flex flex-col gap-[24px] items-center rounded-[10px] border-[#D1D5DB] border-[1px] bg-white">
        <div className="flex flex-col items-center gap-[34px] w-full ">
          <div className="flex flex-col items-center gap-[19px] w-full ">
            <div className="flex flex-col items-center gap-[1px]">
              <h2 className="sm:text-[24px] text-[21px] font-semibold text-center">
                منطقة الشكاوي و التعليقات
              </h2>
              <p className="text-[#4B5563] ">يرجى تقييم تجربتك أدناه</p>
            </div>
            <Rating
              dir="ltr"
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-[4px] w-full">
            <label htmlFor="commentes" className="text-[#6B7280] mr-4">
              تعليقات اضافية
            </label>
            <textarea
              className="px-[14px] py-[12px] rounded-[8px] border-[1px] border-[#D1D5DB] w-full max-h-[120px]"
              name="commentes"
              id="commentes"
              placeholder="نرحب يكامل تعليقاتكم ^_^"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[22px]">
          <button className="bg-[#047cd1] px-[32px] md:px-[50px] leading-[44px] rounded-[6px] text-[18px] text-white">
            {" "}
            إرسال التعليق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
