import { useEffect } from "react";
import "./App.scss";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./features/home/homeSlice";

function App() {

  const dispatch = useDispatch();

  const {url} = useSelector((state)=>state.home);
  console.log('url', url);

  const apiConfig = ()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log('res', res)
      dispatch(getApiConfiguration(res))
    })
    .catch((err)=>{
      console.log('error while fetching data', err)
    })

  }

  useEffect(()=>{
    apiConfig()
  })
  
  return(
    <>
      hello
    </>
  )
}

export default App;
