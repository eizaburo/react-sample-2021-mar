import React, { useEffect, useState } from 'react'
import Header from './Header'

function App() {

  //変数
  const message: string = "Hello World!"
  const [name, setName] = useState("");

  //didmount
  useEffect(() => {
    console.log("mount!")
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <Header/>
      <p>{message}</p>
      <button onClick={() => alert(name)}>押してね</button>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
          console.log(name)
        }}
      />
    </div>
  );
}

export default App;
