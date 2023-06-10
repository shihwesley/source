import { GoogleLogin } from 'react-google-login';

const clientId = '233204277906-i027u1gk3hc15khspua18arlps6durck.apps.googleusercontent.com';

function Login() {
    const onSuccess = (response) => {
        console.log(response);
    }

    const onFailure = (response) => {
        console.log(response);
    }
    return (
        <div id = "signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;