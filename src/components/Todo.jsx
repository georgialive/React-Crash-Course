import "./Styles.css"

function Todo({ title }) {
    function deleteToDo(  ){
        console.log('deleteTodo()', title)
    }

    return(
        <div className="todo">
          <p>{ title }</p>
          <button onClick={() => deleteToDo(1)}>Delete</button>
        </div>            //         ^
        // DO NOT PUT PARENTESE      |    WHERE THE ARROW IS

    )
}

export default Todo