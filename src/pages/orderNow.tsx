import NavBar from "../components/navBar";
import Tap from "../components/tap";
import Footer from "../components/footer";
import NestedList from "../components/sideOrder";
import { contractors } from "../assets/contractorsData";

const orderNow = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <NavBar selected="خدماتنا"/>
      <div className="flex w-full flex-grow">
        <NestedList />
        <div className="flex flex-col flex-grow h-full relative">
          <Tap title="قائمة المقاولين" />
          <main className=" flex flex-col gap-[30px] flex-grow mt-[80px] h-[69vh]">
            <form className="mx-4 sm:mx-8">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full text-[14px] sm:text-[16px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ابحث و اختر  المقاول المناسب لك ..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-[#047CD1] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] text-sm sm:px-4 px-3 py-2 "
                >
                  ابحث
                </button>
              </div>
            </form>
            <div className="flex flex-col w-full overflow-y-auto ">
              {contractors.map((contractor, index) => {
                return (
                  <div
                    key={index}
                    className="flex md:flex-row flex-col gap-[20px] items-center  md:items-center sm:items-start justify-between w-full sm:px-[40px] px-[15px] border-b-[2px] py-[35px]"
                  >
                    <div className="flex sm:flex-row flex-col items-center gap-[35px]">
                      <img
                        src={contractor.imgPath}
                        alt=""
                        className="w-[130px] h-[130px] rounded-[8px]"
                      />
                      <div className="flex flex-col sm:items-start items-center gap-[10px]">
                        <h3 className="md:text-[26px] text-[21px] font-semibold text-center">
                          {contractor.title}
                        </h3>
                        <div className="flex items-center gap-[15px]">
                          <div className="flex items-start gap-[10px]">
                              <span className="text-[#28a745]">{contractor.popularity[0]}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[18px] cursor-pointer"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              fill="#28a745"
                            >
                              <path d="M939.516933 410.236936H666.879976C772.478959 19.839997 591.998988 0 591.998988 0c-73.598989 0-58.239991 59.519991-63.99999 69.759989 0 191.99797-202.877968 340.476947-202.877969 340.476947v541.436915c0 53.119992 74.879988 72.319989 101.759984 72.319989h409.596936c38.399994 0 69.759989-101.119984 69.759989-101.119984 101.118984-344.957946 101.118984-447.99693 101.118985-447.99693a63.99999 63.99999 0 0 0-68.47999-63.99999z m-725.754886 0H49.922072a33.279995 33.279995 0 0 0-33.918995 33.279995l33.919995 545.916914a33.919995 33.919995 0 0 0 34.559995 34.559995h141.438978c29.439995 0 29.439995-23.039996 29.439995-23.039996V451.836929a40.319994 40.319994 0 0 0-41.599993-41.599993z" />
                            </svg>
                          </div>
                          <div className="flex items-start gap-[10px]">
                          <span className="text-[#dc3545]">{contractor.popularity[1]}</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[18px] translate-y-1 cursor-pointer"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              fill="#dc3545"
                            >
                              <path d="M939.514228 613.762564a63.9996 63.9996 0 0 0 68.479572-63.9996s0-102.39936-101.119368-447.9972c0 0-31.359804-101.119368-69.759564-101.119368H426.877432C399.9976 0.0064 325.118068 19.20628 325.118068 72.965944v540.79662S527.9968 763.521628 527.9968 954.240436c5.759964 10.239936-10.239936 69.759564 63.9996 69.759564 0 0 178.558884-19.839876 72.959544-410.237436zM213.758764 613.762564a40.319748 40.319748 0 0 0 41.59974-41.59974V23.046256s0-23.039856-29.439816-23.039856H84.479572a33.919788 33.919788 0 0 0-34.559784 34.559784L16 580.482772a33.279792 33.279792 0 0 0 33.919788 33.279792z" />
                            </svg>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={`px-[24px] leading-[46px] rounded-[2px] ${contractor.availability ? "bg-[#28a745]":"bg-[#c22c3b] cursor-not-allowed"} text-white font-semibold`}>
                      {contractor.availability ? "أرسل دعوة":"غير متوفر"}
                    </button>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default orderNow;
