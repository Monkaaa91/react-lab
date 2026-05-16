import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import AfterLogin from "./AfterLogin";
import MeetingsPage from "./meetings/MeetingsPage";

function App() {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login(emailFromForm) {
        setEmail(emailFromForm);
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setEmail('');
    }
    return (
        <div className="App">
            <h1>Witaj w systemie do zapisu na zajęcia</h1>

            {!isLoggedIn && (
                <LoginForm onLogin={login} />
            )}

            {isLoggedIn && (

                <MeetingsPage onLogout={handleLogout} email={email} />

            )}
        </div>
    );
}
export default App;


