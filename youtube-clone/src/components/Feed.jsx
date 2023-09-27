import LeftNavbar from "./leftNavbar/LeftNavbar";
import Main from "./main/Main";
import { useEffect } from "react";

const Feed = () => {

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    // we want to remove 'custom-h' class on Feed component
  }, []);


  return (
    <div className="flex h-[calc(100%-56px)]" >
      <LeftNavbar/>
      <Main/>
    </div>
  )
}

export default Feed