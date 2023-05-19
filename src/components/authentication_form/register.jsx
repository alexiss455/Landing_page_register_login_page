function register(props) {
  return (
    <div className="w-1/2 duration-300 px-3">
      <form className="flex flex-col text-gray-500">
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          className="bg-gray-300 py-2 px-1 rounded-sm text-gray-500 text-sm"
          required
        />
        <label htmlFor="E-mail">E-mail</label>
        <input
          type="email"
          className="bg-gray-300 py-2 px-1 rounded-sm text-gray-500 text-sm"
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          className="bg-gray-300 py-2 px-1 rounded-sm text-gray-500 text-sm"
          required
        />

        <button
          type="submit"
          className={`bg-cyan-400 mt-2 text-white py-2 rounded-sm active:scale-75 duration-300
          `}
        >
          Sign Up
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-2">
        Already Have an account?
        <button className="text-blue-500" onClick={props.checkStatus}>
          Login
        </button>
      </p>
    </div>
  );
}

export default register;
