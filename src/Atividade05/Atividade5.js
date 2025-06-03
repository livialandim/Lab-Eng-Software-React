import { Link } from "react-router-dom";
import { useState } from "react";
import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import ContactList from "./ContactList";
import Chat from "./Chat";

export default function Atividade5() {
    const [selectedContact, setSelectedContact] = useState(null);
    const contacts = [
        { name: 'Ana', email: 'ana@email.com' },
        { name: 'Beatriz', email: 'beatriz@email.com' },
        { name: 'Carolina', email: 'carolina@email.com' }
    ]

    return (
        <>
            <Link to="/">Voltar</Link>

            <h1>Semana 5</h1>

            <h2>City Quiz</h2>
            <FormQuiz />

            <h2>FormTicket</h2>
            <FormTicket />

            <h2>Accordion</h2>
            <Accordion />

            <h2>ContactList e Chat</h2>
            <ContactList
                contacts={contacts}
                selectedContact={selectedContact}
                onSelect={setSelectedContact}
            />
            <Chat contact={selectedContact} />
        </>
    );
}