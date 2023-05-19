

function menu_bar(props) {
  return (
    <div className={` ${props.className} flex flex-col gap-1 md:hidden`} onClick={props.handleClick} >
        <div className={`${props.top} w-7 h-[2px] bg-black duration-300`}></div>
        <div className={`${props.mid} w-7 h-[2px] bg-black duration-200`}></div>
        <div className={`${props.bottom} w-7 h-[2px] bg-black duration-300`}></div>
    </div>
  )
}

export default menu_bar