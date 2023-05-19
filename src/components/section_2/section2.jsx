import Reusable_btn from "../btn/reusable_btn";

function section2() {
  return (
    <section className="px-4 z-40 -mb-[88px] max-md:-mb-[120px] relative">
      <div
        className={`max-w-7xl mx-auto max-xl:px-4 bg_image rounded-xl mt-12 overflow-hidden z-40`}
      >
        <form className="flex items-center max-md:flex-col gap-4 justify-center h-44 max-md:h-60 w-full px-8 ">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="outline-cyan-400 w-[80%] max-md:w-full py-6 rounded-xl px-4"
          />
          <Reusable_btn
            name={"Shorten it"}
            className={"py-4 max-md:w-full max-md:rounded-xl"}
          />
        </form>
      </div>
    </section>
  );
}

export default section2;
