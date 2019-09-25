import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const responseGoogle = (response) => {
    console.log(response);
}

export default function Login() {
    return (
        <div className='loginForm'>
            <input className='firstName' />
            <input className='lastName' />
            <div id='googleButton'>
                <GoogleLogin
                    clientId="686578234039-g8l4uljoh00uf88e87kviq9qigrltoit.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                  <GoogleLogout
                    buttonText="Logout"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
}