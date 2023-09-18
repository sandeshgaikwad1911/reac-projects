import {useContext, useState} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {

    const {setUser} = useContext(UserContext);
    
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    const onChangeHandler = (e)=>{
        const {name, value} = e.target
        setUserInfo((prev)=>{
            return({
                ...prev,
                [name]: value
            })  
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // setUser({username: userInfo.username, password: userInfo.password})
        setUser(userInfo)
        setUserInfo({username: "", password: ""})
    }

  return (
    <div className="">

        <div className='max-w-sm mx-auto bg-teal-300 p-6'>
            <h2 className='text-lg'>Login</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-3'>
                <div>
                    <input type='text' name='username' value={userInfo.username} onChange={onChangeHandler} placeholder='username'
                        className='w-full border-none outline-none p-1 bg-gray-400'
                    />
                </div>
                <div>
                    <input type='password' name='password' value={userInfo.password} onChange={onChangeHandler} placeholder='password'
                        className='w-full border-none outline-none p-1 bg-gray-400'
                    />
                </div>
                <div>
                    <button type='submit' className='rounded-full bg-blue-500 w-full border-none outline-none p-1'>Login</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Login