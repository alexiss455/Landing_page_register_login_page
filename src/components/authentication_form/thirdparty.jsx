import {
    AiFillGithub,
    AiOutlineTwitter,
    AiOutlineGoogle,
  } from "react-icons/ai";
function thirdparty() {
  return (
    <>
      <div className="text-white text-sm flex flex-col gap-y-2 px-3">
        <button className="active:scale-90 bg-red-600 p-2 rounded-md flex justify-center flex-row gap-x-2 items-center hover:shadow-lg hover:transition-shadow hover:shadow-red-300 duration-300">
          <AiOutlineGoogle size={"24"} />
          <span>Continue In with Google</span>
        </button>
        <button className="active:scale-90 bg-blue-500 p-2 rounded-md flex justify-center flex-row gap-x-2 items-center hover:shadow-lg hover:transition-shadow hover:shadow-blue-300 duration-300">
          <AiOutlineTwitter size={"24"} />
          <span>Continue In with Twitter</span>
        </button>
        <button className="active:scale-90 bg-gray-950 p-2 rounded-md flex justify-center flex-row gap-x-2 items-center hover:shadow-lg hover:transition-shadow hover:shadow-gray-400 duration-300">
          <AiFillGithub size={"24"} />
          <span>Continue In with Github</span>
        </button>
      </div>
    </>
  );
}

export default thirdparty;
