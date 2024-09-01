import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [response, setResponse] = useState<string | null>(null);
  const [name, setName] = useState<string>("")
  
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
  };

  const pingServer = async () => {
    try {
      const res = await fetch('http://localhost:3001/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name}),
      });
      const data = await res.json();
      console.log(data)
      setResponse(data.message);
      console.log(response)
    } catch (error) {
      console.error('Error pinging server:', error);
      setResponse('Error');
    }
  };
  
  useEffect(() => {
    console.log('Response updated:', response);
  }, [response]);

  return (
    <>
      {
        <div className="body">
          <h1>Enter Name</h1>
          <div className="input">
            <input type = "text" value = {name} onChange={handleNameInput}/>
          </div>
          <div className="joinServerButton">
            <button onClick={pingServer}>Join</button>
          </div>
          {response && <p>You are Connected</p>}
        </div>
      }
    </>
  )
}

export default App
