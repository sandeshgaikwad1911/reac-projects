import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const YoutubeContext = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children})=>{

    const [loading, setLoading] = useState(false);

    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");

    const [mobileMenu, setMobileMenu] = useState(false);

    // Fetch data on load and store in state.--------------------------------------------------------------------------

    const fetchSelectedCategoryData = (category) => {

        setLoading(true);

        // https://youtube138.p.rapidapi.com/search/?q=New
        fetchDataFromApi(`search/?q=${category}`)
            .then((res)=>{
                // console.log('res', res)
                // console.log('resContent', res.contents);
                setSearchResults(res?.contents)
                setLoading(false);
            })
            .catch((err)=>{
                console.log('err while fetching data',err)
                setLoading(false)
            })
        
    };

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategory);
    },[selectedCategory])

    return(
        <YoutubeContext.Provider value={{loading, setLoading, searchResults, setSearchResults, selectedCategory, setSelectedCategory, mobileMenu, setMobileMenu}}>
            {children}
        </YoutubeContext.Provider>
    )
}

export default ContextProvider