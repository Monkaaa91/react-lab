import './App.css';
import { useState } from "react";
import "milligram";
import LoginForm from "./LoginForm";
import MeetingsPage from "./meetings/MeetingsPage";

function App() {
    const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("email"));
    const [meetings, setMeetings] = useState(() => {
        const saved = localStorage.getItem("meetings");
        return saved ? JSON.parse(saved) : [];
    });

    function login(emailFromForm) {
        setEmail(emailFromForm);
        setIsLoggedIn(true);
        localStorage.setItem("email", emailFromForm);
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setEmail("");
        localStorage.removeItem("email");
    }

    function handleAddMeeting(meeting) {
        const updated = [...meetings, meeting];
        setMeetings(updated);
        localStorage.setItem("meetings", JSON.stringify(updated));
    }

    return (
        <div className="App">
            <h1>Witaj w systemie do zapisu na zajęcia</h1>

            {!isLoggedIn && (
                <LoginForm onLogin={login} />
            )}

            {isLoggedIn && (
                <MeetingsPage
                    email={email}
                    onLogout={handleLogout}
                    meetings={meetings}
                    onAddMeeting={handleAddMeeting}
                />
            )}
        </div>
    );
}


export default App;


