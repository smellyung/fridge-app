import React from 'react';
import Logo from '../src/components/Logo';
import Form from '../src/components/Form';
import Login from '../src/components/LoginFormTemp';
import '../src/App.css';

function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // useEffect(() => {
  //   window.gapi.signin2.render('g-signin2', {
  //     'scope': 'https://www.googleapis.com/auth/plus.login',
  //     'width': 200,
  //     'height': 50,
  //     'longtitle': true,
  //     'theme': 'dark',
  //     'onsuccess': onSignIn
  //   })
  // })
  return (
    <div className='App'>
      <Login />
      
      <Logo />
      <Form />
    </div>
  );
}

export default App;
