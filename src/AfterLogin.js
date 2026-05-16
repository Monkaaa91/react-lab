export default function AfterLogin(props) {

    return (
        <div>
            <h2>Witaj {props.email}!</h2>

            <button onClick={props.onLogout}>
                Wyloguj
            </button>
        </div>
    );
}
