import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './config/spotify'

function App() {
  [token, setToken] = useState()

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token", token);

  }, []);

  return (
    <div className="App">
      {token ?
        <h1>Logged In</h1>
        :
        <Login />
      }
    </div>
  );
}

export default App;
