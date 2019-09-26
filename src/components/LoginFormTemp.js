import React from 'react';
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
    console.log("Google's response is: ", response);
}

export default function Login() {
    return (
        <div className='loginForm'>
            <h1>Please Login with Google</h1>
            <div id='googleButton'>
                <GoogleLogin
                    clientId="686578234039-g8l4uljoh00uf88e87kviq9qigrltoit.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                  {/* <GoogleLogout
                    buttonText="Logout"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> */}
                {/* <GoogleLogout
                    clientId="686578234039-g8l4uljoh00uf88e87kviq9qigrltoit.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                >
                </GoogleLogout> */}
            </div>
        </div>
    );
}