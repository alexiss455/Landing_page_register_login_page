import section1Piicuture from "../images/illustration-working.svg";

function section1() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 pt-32 ">
        <div className="flex flex-col items-start justify-center self-center max-md:text-center max-xl:px-4">
          <h1 className="text-[4rem] font-[700] text-gray-900 leading-[3.8rem] max-lg:text-[3rem] max-sm:text-[2.5rem] max-sm:leading-10">
            Abbreviated Link Representations
          </h1>
          <p className="mt-8 font-semibold text-gray-500 text-[1.5rem] leading-[1.8rem]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="
          after:w-full after:h-full after:absolute after:top-0 after:left-0 after:hover:bg-slate-200 after:opacity-30 relative overflow-hidden
          bg-cyan-500 bg-opacity-80 text-white text-[1.7rem] px-6 py-2 rounded-full mt-10 max-md:mx-auto active:scale-75 duration-300">Get Started</button>
        </div>
        <div className="max-md:order-first w-full">
          <img src={section1Piicuture}  className="w-full h-full object-cover object-left"/>
        </div>
      </div>
    </div>
  );
}

export default section1;
