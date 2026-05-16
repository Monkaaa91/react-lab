import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isDisabled = email.length < 10 || email.length > 30;

    function handleChange(event) {
        setEmail(event.target.value);
    }
    function handleLogin() {
        setIsLoggedIn(true);
    }
    function handleLogout() {
        setIsLoggedIn(false);
        setEmail('');
    }

    return (
        <div className="App">
            <h1>Witaj w systemie do zapisu na zajęcia</h1>
            {!isLoggedIn && <div className="login-row">
            <h2>Zaloguj się: </h2>


            <input className="email-input"
                type="text"
                value={email}
                onChange={handleChange}/>

            <button className="save-button-email"
                    onClick={handleLogin}
                    disabled={isDisabled}>
                    Zapisz</button>
            </div> }
            {isLoggedIn && (
                <div className="welcome-page">
                    <h2>Witaj {email}!</h2>

                <div>   <button onClick={handleLogout}>
                        Wyloguj
                    </button>
                </div>
                </div>
            )}
            {email.length > 0 && email.length < 20 && (
                <div className="error">Email jest za krótki.</div>)}
            {email.length >= 30 && (
                <div className="error" >Email jest za długi.</div>)}
        </div>


    );
}


export default App;


