import { useState } from "react";
export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const tooShort = email.length >= 0 && email.length < 10;
    const tooLong = email.length > 30;
    const disabled = tooShort || tooLong;
    return  (
        <div>
            <label>Zaloguj się e-mailem</label>

            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button
                type="button"
                disabled={disabled}
                onClick={() => props.onLogin(email)}
            >
                Wchodzę
            </button>

            {tooShort && <div className="error">Email jest za krótki.</div>}
            {tooLong && <div className="error">Email jest za długi.</div>}
        </div>
    );
}
