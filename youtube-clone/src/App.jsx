import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Feed from "./components/Feed";
import ContextProvider from "./contex/YoutubeContext";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Feed />} />
      <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
      <Route path="/video/:id" element={<VideoDetails />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
};

export default App;

/* 
    rapidapi.com    =>    youtube => by Glaviour
*/
