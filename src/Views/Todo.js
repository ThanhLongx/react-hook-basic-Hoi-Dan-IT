const Todo = (props) => {
    const todo = props.myData;

    return (
        <div className="todo-container">
            {todo.map((todo) => {
                return (
                    <li className="todo-child" key={todo.id}>
                        {todo.title}
                    </li>
                );
            })}
        </div>
    );
};

export default Todo;
