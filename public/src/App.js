import React from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [text, setText] = React.useState('')
  const [msg, setMsg] = React.useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const setMessage = async () => {
    let res = await axios.post('/users/set-message', {text})
    let {msg} = res.data
    setMsg(msg)
    setText('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={handleChange}
          id='text' value={text}
          style={{
            height: "50px",
            fontSize: 50
          }}
        ></input><br/>
        <button
          onClick={setMessage}
          style={{height: "50px",fontSize: 35}}
        >set message</button><br/>
        {msg}
      </header>
    </div>
  )
}

export default App
