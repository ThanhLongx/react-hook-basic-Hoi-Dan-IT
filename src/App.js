import logo from "./logo.svg";
import "./App.css";
import Nav from "./Views/Nav";
import { useState } from "react";
import Todo from "./Views/Todo";

function App() {
    let [name, setName] = useState("HTL");

    let [address, setAddress] = useState("");

    let [todo, setTodos] = useState([
        { id: "todo1", title: "watching tv" },
        { id: "todo2", title: "doing homework" },
        { id: "todo3", title: "playing game" },
    ]);

    const handleEventClick = (event) => {
        if (!address) {
            alert("empty input");
            return;
        }
        let newTodo = { id: "abc", title: address };
        setTodos([...todo, newTodo]);
        setAddress("");
    };

    const handleOnchangeInput = (event) => {
        setAddress(event.target.value);
    };

    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello world width from {name}</h1>
                <Todo myData={todo} />

                <input
                    type="text"
                    value={address}
                    onChange={(event) => handleOnchangeInput(event)}
                />
                <button
                    type="button"
                    onClick={(event) => handleEventClick(event)}
                >
                    Click Me
                </button>
            </header>
        </div>
    );
}

export default App;
