import sec from "../section_3/sec";
function Section3() {
  return (
    <div className="bg-gray-500 bg-opacity-20 pb-14">
      <div className="text-center pt-28 max-md:pt-36 max-w-xl mx-auto">
        <h1 className="text-[2rem] font-[800] ">Advanced Statistics</h1>
        <p className=" text-xl font-[500] text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="mt-20  max-w-7xl mx-auto relative max-xl:px-4 max-lg:w-1/2 max-sm:w-full">
        <div className="w-[90%] h-[5px] max-lg:h-full max-lg:w-[5px] max-lg:left-1/2 max-lg:top-0 max-lg:flex bg-cyan-500 absolute left-12 top-32"></div>
        <div className="flex flex-row gap-6 max-lg:flex-col duration-300 ">
          {sec.map((item, index) => (
            <div key={index} className={` ${item.className} bg-white px-6 py-3 rounded-xl relative w-full shadow-xl`}>
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center absolute -top-8 left lg:left-8 ">
                {item.icons}
              </div>
              <div className="mt-12">
                <h1 className="text-xl font-bold mb-4 ">{item.title}</h1>
                <p className=" text-gray-500 whitespace-normal"> {item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3;
