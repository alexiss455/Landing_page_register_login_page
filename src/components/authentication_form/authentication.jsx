/* eslint-disable react/prop-types */
import { useState } from "react";
import Login from "./login";
import Register from "./register";
import ThirdPartyAuth from "./thirdparty";

function Authentication(props) {
  const [isLoginForm, setIsLoginForm] = useState(false);
  
  const checkStatus = () => {
    setIsLoginForm((prevValue) => !prevValue);
  };

  return (
    <div
      className={`fixed right-0 top-0 w-[100%] min-h-[100vh] flex justify-center items-center bg-gray-500 bg-opacity-40 backdrop-blur-sm  
         !opacity-100 !z-[100] ${
           props.login
             ? "!opacity-100 !z-[100]"
             : "!opacity-0 !-z-[100] !scale-0"
         } `}
      onClick={props.ifShowAuthForm}
    >
      <div
        className={`w-[360px] flex flex-col py-3 gap-y-3 overflow-hidden bg-white rounded-md duration-300 shadow-lg
             relative inset-0`}
        onClick={(event) => event.stopPropagation()}
      >
        <ThirdPartyAuth />
        <div className="flex flex-row items-center text-center gap-x-2 px-3">
          <span className="w-3/6 h-0.5 bg-gray-950"></span>
          <span className="text-sm font-semibold">OR</span>
          <span className="w-3/6 h-0.5 bg-gray-950"></span>
        </div>
        <div
          className={`flex flex-row w-[200%] ${
            isLoginForm ? "h-[16.5rem]" : "h-[13rem]"
          }`}
        >
          <Login checkStatus={checkStatus} isLoginForm={isLoginForm} />
          <Register checkStatus={checkStatus} />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
