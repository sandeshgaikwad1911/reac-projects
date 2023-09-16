import { useState } from 'react'

function App() {
  const [bgColor, setbgColor] = useState("black")

  return (
    <div className='w-full h-screen'
      style={{
        backgroundColor: bgColor,
        color: bgColor == 'black' ? 'white': 'black'
      }}
    >
        <h1>Background color changer on click</h1>

        <div className='fixed bottom-12  w-full '>
          <div className='flex flex-wrap justify-center items-center  gap-4 p-2 mx-4 rounded-full bg-white'>
            <button className='bg-[red] px-7 py-1 rounded-full text-white' onClick={()=>setbgColor("red")}>Red</button>
            <button className='bg-[green] px-7 py-1 rounded-full text-white' onClick={()=>setbgColor("green")}>Green</button>
            <button className='bg-[black] px-7 py-1 rounded-full text-white ' onClick={()=>setbgColor("black")}>Black</button>
          </div>
        </div>

    </div>
  )
}

export default App
