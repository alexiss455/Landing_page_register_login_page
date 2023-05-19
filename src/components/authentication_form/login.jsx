function login(props) {
  return (
    <>
      <div
        className={`w-1/2 duration-300 px-3 gap-y-1 ${
          props.isLoginForm ? "-ml-[50%]" : "ml-0"
        }`}
      >
        <form className="flex flex-col text-gray-500">
          <label htmlFor="email-input">E-mail</label>
          <input
            type="email"
            id="email-input"
            className="bg-gray-300 py-2 px-1 rounded-sm text-gray-500 text-sm"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="bg-gray-300 py-2 px-1 rounded-sm text-gray-500 text-sm"
          />
          <button
            type="submit"
            className={`bg-cyan-400 text-white mt-2 py-2 rounded-sm active:scale-75 duration-300`}
          >
            LOGIN
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2">
          Dont Have an Account?
          <button className="text-blue-500" onClick={props.checkStatus}>
            Register
          </button>
        </p>
      </div>
    </>
  );
}

export default login;
