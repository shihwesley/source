import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';

const CLIENT_ID = '233204277906-i027u1gk3hc15khspua18arlps6durck.apps.googleusercontent.com';
const CLITNT_SECRET = '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'

function App() {

  useEffect(() => {
    function start() {
      //iniitialize the Google API client with desired scopes
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
      })
    }
      gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <Login />
      <Logout />
    </div>
  );
}

export default App;
