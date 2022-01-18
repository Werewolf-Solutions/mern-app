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
        <input onChange={handleChange} id='text' value={text}></input><br/><br/>
        <button onClick={setMessage}>set message</button><br/><br/>
        {msg}
      </header>
    </div>
  )
}

export default App
