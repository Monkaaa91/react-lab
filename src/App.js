import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');

    function handleChange(event) {
        setEmail(event.target.value);
    }
    function handleSave() {
        console.log("Zapisuję e-mail:", email);
        alert("Zapisano: " + email);
    }
    const isDisabled = email.length < 10 || email.length > 30;

    return (
        <div className="App">
            <h1>System do zapisów na zajęcia</h1>

            <h2>Twój e-mail to {email}</h2>

            <input className="email-input"
                type="text"
                value={email}
                onChange={handleChange}/>

            <button className="save-button-email"
                    onClick={handleSave}
                    disabled={isDisabled}>
                    Zapisz</button>

            {email.length > 0 && email.length < 20 && (
                <div className="error">Email jest za krótki.</div>)}
            {email.length >=20 && email.length < 30 && (
                <div className="correct">Email jest ok</div>)}
            {email.length >= 30 && (
                <div className="error" >Email jest za długi.</div>)}
        </div>
    );
}

export default App;


