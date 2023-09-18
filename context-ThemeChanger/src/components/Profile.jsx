import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
  const {user} = useContext(UserContext)
  return(
    <div className="flex justify-center">
        {user && (<h2 className="text-lg" >{user?.username}</h2>)}
    </div>
  )
}

export default Profile