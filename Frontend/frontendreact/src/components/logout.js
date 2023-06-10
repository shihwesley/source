import { GoogleLogout } from "react-google-login";

const clientId = "233204277906-i027u1gk3hc15khspua18arlps6durck.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        alert("Logout made successfully");
    };

    return (
        <div id = "signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;
