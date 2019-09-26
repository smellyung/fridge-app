import React from 'react';
import GoogleLogin from 'react-google-login';
//{ GoogleLogout }
export default function Login() {
    // const [name, setName] = useState('');
    const responseGoogle = (res) => {
        console.log("Google's response is: ", res);
        fetch('/rest/login', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + res.tokenId
            },
        }).then(res => res.ok ? res.json() : Promise.reject())
        .then(res => {
            console.log('from backend', res);
            //console.log(`A part of our token: ${res.decodedToken.}`)
        })
    }
    const failureGoogle = (res) => {
        console.log("Looks like it failed :(, response is: ", res)
    }
    // const logout = () => {
    //     setName('');
    // };
    return (
        <div className='loginForm'>
            <h1>Please Login with Google</h1>
            <div id='googleButton'>
                <GoogleLogin
                    clientId="686578234039-g8l4uljoh00uf88e87kviq9qigrltoit.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={failureGoogle}
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