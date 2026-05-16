import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="App">
            <h1>System do zapisów na zajęcia</h1>

            <h2>Twój e-mail to {email}</h2>

            <input
                type="text"
                value={email}
                onChange={handleChange}/>

            {email.length > 0 && email.length < 20 && (
                <p className="error">Email jest za krótki.</p>)}
            {email.length >=20 && email.length < 30 && (
                <p className="correct">Email jest ok</p>)}
            {email.length >= 30 && (
                <p className="error" >Email jest za długi.</p>)}
        </div>
    );
}

export default App;


