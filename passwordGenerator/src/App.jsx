
import { useCallback, useState, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const[splCharAllowed, setSplCharAllowed] = useState(false)
  
  // console.log('len:',length ,'num:', numAllowed , 'splChar:', splCharAllowed)

  const [password, setPassword] = useState("")
  
  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed){
      str += "0123456789"
    }

    if(splCharAllowed){
      str += "$@#&"
    }

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, numAllowed, splCharAllowed, setPassword]);


  useEffect(()=>{
    generatePassword();
  },[length, numAllowed, splCharAllowed, generatePassword])

  
 

  /* const copyPasswordtoClip = ()=>{
    window.navigator.clipboard.writeText(password)
  } */
  const passwordRef = useRef(null)
  const copyPasswordtoClip = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='App w-full h-screen bg-black text-white'>
        <h1 className='text-2xl text-center p-3'>password generator</h1>

        <div className='w-full max-w-md mx-auto bg-gray-700 text-orange-500 my-3 p-2 rounded-full'>
            <div className='flex gap-2 ' >
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}
                  ref={passwordRef}
                  placeholder='password' readOnly
                  className='w-full px-5 py-2 outline-none rounded-full '
                />
              <button 
                onClick={copyPasswordtoClip}
                className='outline-none px-5 py-2 rounded-full  border border-white hover:bg-orange-500 hover:text-white'
              >
                copy
              </button>
            </div>
        </div>

        <div className='w-full mx-auto bg-gray-700 text-orange-500 my-3 p-2 flex gap-3 justify-center '>

          <div className='flex items-center gap-1' >
            <label htmlFor="len">length: {length} </label>
            <input type="range" max={16} min={6} id="len" onChange={(e)=>setLength(e.target.value)} />
          </div>

          <div className='flex gap-1 items-center' >
            <label htmlFor="numAllowed">include Number</label>
            <input type="checkbox" name="" id="numAllowed"
              checked={numAllowed}
              onChange={()=>setNumAllowed((prev)=>!prev)}
             />
          </div>

          <div className='flex gap-1 items-center' >
            <label htmlFor="splChar">include spl Char</label>
            <input type="checkbox" name="" id="splChar"
              checked={splCharAllowed}
              onChange={()=>setSplCharAllowed((prev)=>!prev)}
             />
          </div>


        </div>

    </div>
  )
}

export default App
