/* eslint-disable react/prop-types */

function Reusable_btn(props) {
  return (
    <button className={`
    ${props.className}
    after:w-full after:h-full after:absolute after:top-0 after:left-0 after:hover:bg-slate-200 after:opacity-30 relative overflow-hidden
    bg-cyan-500  text-white text-[1.4rem] px-6 py-2 rounded-full max-md:mx-auto active:scale-75 duration-300 whitespace-nowrap`}>{props.name}</button>
  
  )
}

export default Reusable_btn