import { useState } from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({ email, onLogout, meetings, onAddMeeting }) {
    const [showForm, setShowForm] = useState(false);

    function handleNewMeeting(meeting) {
        onAddMeeting(meeting);   // zapis do App.js
        setShowForm(false);
    }

    return (
        <div>
            <h2>Witaj {email}</h2>

            <button onClick={() => setShowForm(true)}>
                Dodaj spotkanie
            </button>

            {showForm && (
                <NewMeetingForm onSubmit={handleNewMeeting} />
            )}

            {meetings.length > 0 && (
                <>
                    <h3>Zajęcia ({meetings.length})</h3>
                    <MeetingsList meetings={meetings}  />
                    <button className="saveMeeting"> Zapisz </button>


                </>

            )}

            <button className="button button-outline" onClick={onLogout}>
                Wyloguj
            </button>
        </div>
    );
}

