import { Link } from "react-router-dom";

const signIn = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#fcfcfc] h-[100vh] overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="sm:hidden flex flex-col gap-[3px] items-center px-[30px] text-center">
          <h1 className="text-[#262F3D] text-[35px] lg:text-[40px] font-semibold tracking-[0.4px]">
            تسجيل الدخول
          </h1>
          <p className="text-[#A4A9B2] sm-[14px] sm:text-[16px]">
            مرحبًا بعودتك! قم بتسجيل الدخول للوصول إلى حسابك.
          </p>
        </div>

        <div className="flex pr-[15px] sm:pr-[40px] lg:px-[40px] sm:py-[32px] items-center w-full ">
          <form className="flex flex-col items-center justify-center flex-grow px-[18px] sm:px-[70px] lg:px-[110px] ">
            <div className="flex flex-col gap-[32px] items-start w-full">
              <div className="sm:flex flex-col gap-[3px] items-start hidden">
                <h1 className="text-[#262F3D] text-[28px] sm:text-[35px] lg:text-[40px] font-semibold tracking-[0.4px]">
                  تسجيل الدخول
                </h1>
                <p className="text-[#A4A9B2] sm-[14px] sm:text-[16px]">
                  مرحبًا بعودتك! قم بتسجيل الدخول للوصول إلى حسابك.
                </p>
              </div>
              <div className="flex flex-col gap-[32px] items-start w-full">
                <div className="flex flex-col gap-[20px] items-start w-full">
                  <div className="flex flex-col gap-[4px] items-start w-full">
                    <label
                      htmlFor="password"
                      className="text-[14px] text-[#344054]"
                    >
                      رقم الجوال
                    </label>
                    <input
                      placeholder="رقم هاتفك"
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
                      placeholder="كلمة مرور"
                      type="password"
                      name="password"
                      id="password"
                      className="px-[14px] py-[6px] w-full rounded-[5px] border-[1px] border-[#696d74] text-[#9198A3] text-[14px]"
                    />
                  </div>
                </div>
                <Link to="/" className="w-full">
                  <button className="bg-[#2aa5f5] px-[26px] leading-[44px] rounded-[1px] text-[18px] text-white w-full">
                    {" "}
                    دخول
                  </button>
                </Link>

                <div className="flex items-center gap-[8px] flex-wrap">
                  <span className="text-[#344054]">ليس لديك حساب ؟</span>
                  <Link to="/signup">
                    <span className="text-[#2aa5f5] font-semibold">
                      أنشاء واحدا
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <img
            src="/signin.png"
            alt="cover"
            className="rounded-[100px] h-[90vh] w-[52%] lg:inline-block hidden"
          />
          <img
            src="/signin11.png"
            alt="cover"
            className="rounded-[30%] h-[90vh] w-[45%] hidden lg:hidden md:inline-block"
          />
          <img
            src="/signin12.png"
            alt="cover"
            className="rounded-[100px] h-[90vh] w-[45%] hidden md:hidden sm:inline-block"
          />
          <img
            src="/signin12.png"
            alt="cover"
            className="rounded-[100px] h-[68vh] w-[34%] sm:hidden inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default signIn;
