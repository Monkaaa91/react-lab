import {useState} from "react";

export default function NewMeetingForm({onSubmit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const disabled = title.trim() === '' || description.trim() === '';
    function submit(event) {
        event.preventDefault();
        onSubmit({title, description});
        setTitle('');
        setDescription('');
    }


    return (
        <form onSubmit={submit}>
            <h3>Dodaj nowe spotkanie</h3>
            <label>Nazwa</label>
            <input type="text" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <label>Opis</label>
            <textarea value={description}
                      onChange={(e) => setDescription(e.target.value)}></textarea>
            <button disabled={disabled}>Dodaj</button>

            {title.trim() === '' && <div className="error">*nazwa jest wymagana.</div>}
            {description.trim() === '' && <div className="error">*opis jest wymagany.</div>}
        </form>
    );
}