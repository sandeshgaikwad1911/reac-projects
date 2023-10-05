import "./style.scss";

import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import Logo from "../../images/movix-logo.svg";

const Header = () => {

  const [show, setShow] = useState("top");

  const [query, setQuery] = useState("");

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  const [lastScrollY, setLastScrollY] = useState(0);

  const {pathname} = useLocation();
  

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const openSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
        setShowSearch(false);
    }
};

const handleNavigation = (mediaType)=>{
  if(mediaType ==="movie"){
    navigate("/explore/movie");
  }
  else{
    navigate("/explore/tv");
  }
  setMobileMenu(false);
};


const navbarControl = ()=>{
  // console.log(window.scrollY);

  if(window.scrollY > 190){
    // setShow("show")

        if(window.scrollY > lastScrollY && !mobileMenu){
          setShow("hide")
        }
        else{
          setShow('show');
        }
  }

  else{
    setShow("top");
  }

  setLastScrollY(window.scrollY);
}

useEffect(()=>{
  window.addEventListener('scroll', navbarControl);
  return ()=>{
    window.removeEventListener("scroll", navbarControl)
  }
},[lastScrollY],);

// when url change we navigate to differen page. so that page should open from top
useEffect(() => {
  window.scrollTo(0, 0);
},[pathname]);

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      {/* when mobileMenu true then only apply a classname  "mobileView" */}
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="" />
        </div>

        <ul className="menuItems">
          <li className="menuItem" onClick={()=>{handleNavigation("movie")}}>Movies</li>
          <li className="menuItem" onClick={()=>{handleNavigation("tv")}}>Tv Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch}/>
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
