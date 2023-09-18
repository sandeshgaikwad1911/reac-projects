import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import ThemeProvider  from './context/ThemeContext'
import UserContextProvider from './context/UserContextProvider'
function App() {
 
  return (
    <ThemeProvider>
      <UserContextProvider>
          <Navbar/>
          <Login/>
          <Profile/>
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App
