// eslint-disable-next-line react/prop-types
const LeftNavbarMenuItems = ({ text, icon, className, action }) => {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 px-3 flex items-center gap-5  mb-[1px] rounded-lg hover:bg-white/[0.15] " + className}
          onClick={action}
    >
        <span className="text-xl ">{icon}</span>
        {text}
    </div>
  )
}

export default LeftNavbarMenuItems