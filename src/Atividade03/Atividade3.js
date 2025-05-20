import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Gallery from "./Gallery";
import TodoList from "./TodoList";
import Profile from "./Profile";
import PackingList from "./PackingList";
import List from "./List";
import PrepareMode from "./Recipe";
import TeaSet from "./Tea";

export default function Atividade3() {
    return (
        <>
            <Link to="/">Voltar</Link>

            <h1>Semana 3</h1>

            <Gallery />
            <Avatar />
            <TodoList />
            <Profile />
            <PackingList />
            <List />
            <PrepareMode />
            <TeaSet />
        </>
    );
}