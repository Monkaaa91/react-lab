import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";


export default function MeetingsPage({email,onLogout}) {
    const [meetings, setMeetings] = useState([]);

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }

    return (
        <div>
            <h2>Witaj {email}</h2>
            <h3>Zajęcia ({meetings.length})</h3>
            <button class="button button-outline" onClick={onLogout}>Wyloguj</button>
            <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/>
            <MeetingsList meetings={meetings}/>
        </div>

    )
}