import { Link } from "react-router-dom";
import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import ContactList from "./ContactList";
import Chat from "./Chat";

export default function Atividade5() {
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
            <ContactList/>
            <Chat />
        </>
    );
}