import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-amber-600 text-xl"> Testing: Hello Wofrldindg </h1>
      <div >
        <button className="bg-amber-400" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
