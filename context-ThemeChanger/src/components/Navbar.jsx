import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(theme)

    const onChangeHandle = (e)=>{
        const status = e.currentTarget.checked              // checkbox event
        if(status){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }

  return (
    <div className="flex justify-center h-8">
        <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="check" checked={theme=== 'dark'} onChange={onChangeHandle} />
            <label htmlFor="check">ToggleTheme</label>
        </div>
    </div>
  )
}
export default Navbar