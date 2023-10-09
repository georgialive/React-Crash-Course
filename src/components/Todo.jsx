import "./Styles.css"

function Todo({ title, onTodoDelete}) {
    return(
        <div className="todo">
          <p>{ title }</p>
          <button onClick={onTodoDelete}>Delete</button>
        </div>            //         ^
        // DO NOT PUT PARENTESE      |    WHERE THE ARROW IS

    )
}

export default Todo