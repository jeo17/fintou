import { Link } from "react-router-dom";

const signUp = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#fcfcfc] h-[100vh] overflow-hidden">
      <div className="flex flex-col items-center gap-[15px]">
        <div className="flex flex-col gap-[3px] items-start sm:hidden">
          <h1 className="text-[#262F3D] text-[40px] font-semibold tracking-[0.4px]">
            انشاء حساب
          </h1>
          <p className="text-[#A4A9B2]">انضم إلينا اليوم وابدأ رحلتك معنا !</p>
        </div>

        <div className="flex px-[12px] sm:px-[40px] py-[32px] items-center w-full ">
          <img
            src="/signup1.png"
            alt="cover"
            className="lg:rounded-[100px] md:rounded-[50%] rounded-[100px] h-[90vh] lg:w-[55%] w-[50%] hidden md:inline-block"
          />
          <img
            src="/signup11.png"
            alt="cover"
            className=" rounded-[500px] h-[90vh] lg:w-[55%] w-[35%] hidden md:hidden sm:inline-block"
          />
          <img
            src="/signup12.jpg"
            alt="cover"
            className=" rounded-[500px] h-[60vw] w-[35%] sm:hidden"
          />

          <form className="flex flex-col items-center justify-center flex-grow lg:px-[110px] sm:px-[70px] px-[15px] ">
            <div className="flex flex-col gap-[32px] items-start w-full">
              <div className="sm:flex flex-col gap-[3px] items-start hidden">
                <h1 className="text-[#262F3D] text-[40px] font-semibold tracking-[0.4px]">
                  انشاء حساب
                </h1>
                <p className="text-[#A4A9B2]">
                  انضم إلينا اليوم وابدأ رحلتك معنا !
                </p>
              </div>
              <div className="flex flex-col gap-[32px] items-start w-full">
                <div className="flex flex-col gap-[15px] items-start w-full">
                  <div className="flex flex-col gap-[4px] items-start w-full">
                    <label
                      htmlFor="password"
                      className="text-[14px] text-[#344054]"
                    >
                      رقم الجوال
                    </label>
                    <input
                      placeholder="رقم هاتفك..."
                      type="text"
                      name="phone"
                      id="phone"
                      className="px-[14px] py-[6px] w-full rounded-[5px] border-[1px] border-[#696d74] text-[#9198A3] text-[14px]"
                    />
                  </div>

                  <div className="flex flex-col gap-[4px] items-start w-full">
                    <label
                      htmlFor="password"
                      className="text-[14px] text-[#344054]"
                    >
                      كلمة السر
                    </label>
                    <input
                      placeholder="اختر كلمة مرور..."
                      type="password"
                      name="password"
                      id="password"
                      className="px-[14px] py-[6px] w-full rounded-[5px] border-[1px] border-[#696d74] text-[#9198A3] text-[14px]"
                    />
                  </div>

                  <div className="flex flex-col gap-[4px] items-start w-full">
                    <label
                      htmlFor="email"
                      className="text-[14px] text-[#344054]"
                    >
                      البريد الالكتروني
                    </label>
                    <input
                      placeholder="بريديك الالكتروني ..."
                      type="email"
                      name="email"
                      id="email"
                      className="px-[14px] py-[6px] w-full rounded-[5px] border-[1px] border-[#696d74] text-[#9198A3] text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start w-full">
                    <label
                      htmlFor="userName"
                      className="text-[14px] text-[#344054]"
                    >
                      اسمك (اختياري)
                    </label>
                    <input
                      placeholder="ماذا يمكننا مناداتك  ؟"
                      type="text"
                      name="userName"
                      id="userName"
                      className="px-[14px] py-[6px] w-full rounded-[5px] border-[1px] border-[#696d74] text-[#9198A3] text-[14px]"
                    />
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" name="" id="" />
                    <p className="text-[#262F3D] font-semibold sm:text-[16px] text-[14px]">
                      أوافق على الشروط والأحكام
                    </p>
                  </div>
                </div>
                <Link to="/" className="w-full">
                <button className="bg-[#2aa5f5] px-[26px] leading-[44px] rounded-[1px] text-[18px] text-white w-full">
                  {" "}
                  انشاء
                </button>         
                </Link>


                <div className="flex items-center gap-[8px] flex-wrap">
                <span className="text-[#344054]">لديك حساب ؟</span>
                <Link to="/signin">
                <span className="text-[#2aa5f5] font-semibold">سجل الدخول</span>

                </Link>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signUp;
