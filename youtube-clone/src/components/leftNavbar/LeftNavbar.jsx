/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { YoutubeContext } from "../../contex/YoutubeContext";
import { categories } from "../../utils/constants";
import LeftNavbarMenuItems from "./LeftNavbarMenuItems";

const LeftNavbar = () => {

  const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(YoutubeContext);
//   console.log('sele', selectedCategory);

  const navigate = useNavigate();

  const clickHandler = (type, name) => {
    switch (type) {
        case "category":
            return setSelectedCategory(name);
        case "home":
            return setSelectedCategory(name);
        case "menu":
            return false;
        default:
            break;
    }
  };
    //   console.log('categories', categories)

  return (
    <div
        className={`w-[240px] overflow-y-auto h-full py-4 bg-black z-10 absolute md:block md:relative translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex flex-col px-5 ">
                {
                    categories.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <LeftNavbarMenuItems
                                    text={item.type === "home" ? "Home" : item.name}
                                    // { name: "New", icon: <AiFillHome />, type: "home" }, 
                                    // ... on type: "home" we have name: "New" .. but we want to render "Home" not "New"
                                    icon={item.icon}
                                    className={`${selectedCategory === item.name ? "bg-white/[0.15]" : "" }`}
                                    // const [selectedCategory, setSelectedCategory] = useState("New");
                                    action={() => {
                                        clickHandler(item.type, item.name);
                                        navigate("/");
                                    }}
                                    
                                />
                                {
                                    item.divider &&(
                                        <hr className="my-5 border-white/[0.2]" />
                                    )
                                }
                            </React.Fragment>
                        );
                    })
                }
            </div>

    </div>
  );
};

export default LeftNavbar;
