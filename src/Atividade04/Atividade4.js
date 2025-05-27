import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Form from "./Form";
import Counter from "./Counter";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";


export default function Atividade4() {
    return (
        <>
            <Link to="/">Voltar</Link>

            <h1>Semana 4</h1>

            <h2>Toolbar</h2>
            <Toolbar />

            <h2>Gallery</h2>
            <Gallery />

            <h2>Counter</h2>
            <Counter />

            <h2>Form</h2>
            <Form />

            <h2>Moving Dot</h2>
            <MovingDot />

            <h2>Form2</h2>
            <Form2 />

            <h2>Form3</h2>
            <Form3 />

            <h2>List</h2>
            <List />

            <h2>List2</h2>
            <List2 />

            <h2>Shape Editor</h2>
            <ShapeEditor />

            <h2>Counter List</h2>
            <CounterList />

            <h2>List 3</h2>
            <List3 />

            <h2>List 4</h2>
            <List4 />

            <h2>Bucket List</h2>
            <BucketList />
        </>
    );
}