import "./App.css";
import './components/Styles.css'
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal.jsx'
import Counter from './components/Counter'
import React, { useState } from 'react';

function App() {


  return <Counter />

  const [showModal, setShowModal] = useState(false);
 
  return (
    <div>
        {/* React Crash Course

        INTRODUCTION
        
        Definition of React: A JavaScript library/framework for 
        builing user interfaces.
        
        Reasons for React:
        -Easier to USe
        -Maintainable
        -Scalable
        -Most popular frontend Framework
        -Contantly being Updated by Faceboo */}




        {/* 
        
        
        REUSABLE COMPONEMTS
        
        Why do we use it? –Redue code duplication.

         Two Parts of Components:
           - Creating a component 
           - Using a component

        Creating a Component:
        1. Create a new file
            - "Todo.jsx"
        2. Inside of this file create a function
            -function Todo{}
        3. Inside of your function, return some JSX
            -function Todo {
              return <div> Finish Frontend Simplified </div>
            }
        4. Export your function
            - export default Todo;
        
        */}

        {/* 
        
        
        PROPS

        What are props? 
        
        Props make our components dynamic.

        Two Parts to Props:
          - Creating Props
          - Using Props
        
        Creating Props
        - Pass in the Property name and Value
          <Todo propName="Prop Value" />
          Ex: <Todo title="Finish Frontend Simplified" />

        Using Props

        - Accept props in parameter
          function ToDo({propName}){
            ...
          }
        
        -Use props
          function Todo({ propName }) {
            return <div>{ propName }</div>
          }
        
        Creating Props: How to create multiple Props
        - Pass in the property name and value
          <Todo propName="Prop Value" propTwo="Second Prop Value"/>

        Using Props: How to use multiple props
        - Accept props in parameter
          function Todo({ propName, propSecondName}){
            ...
          }
        - Use props
          function Todo({propName, propSecondName}){
            return <div>{propName} {propSecondName}</div>;
          }
         
        In the Parent Component: <MyComponent test="*Testing*" />
                                                ^
                                                |
                                                ---------
                                                        |
                                                        V
        In the Child Component: function MyComponent({ test }) {
                                                        ^
                                                        |
                                                  ______|
                                                  |
                                                  V
                                  return <div>{ test }</div>
                                }
        Output: *Testing*

        */}

        {/* 
        
      
        
        EVENT HANDLERS 
        
        What are event handlers?

        Code that executes when an event occurs.

        Most Important:
        - onClick
        - onChange


        REACT HOOKS

        There are multiple react hooks, but the most important ones are:
        - useState
        - useEffect

        Use State
        - how we define variables in React

        Conditional Rendering
        - Rendering a component when a certain condition is met

        
          state variable          default value
                |                     |
                V                     V
        const [state, setState] = useState(false);
                        ^
                        |
                    function that changes the state


        Excercise

        1. Create a "Counter.jsx" component
        2. Create a default `count` of 0
        3. Create a hotton to increment `count` by 1
        4. Create a button to decrement `count` by 1
        4. Import your Counter in App.jsk and test it.
        
        */}
        <Counter />

        <Title />
        <div>
          <input type="text" onChange={(event) => {
            console.log(event.target.value)
          }}/>
          <button onClick={() => setShowModal(true)}>Add Todo</button>
        </div>
          <div className="todo__wrapper">
            <Todo 
              title="Finish Frontend Simplified"
            />
            <Todo 
              title="Finish the Top Tech Roadmap"
            />
            <Todo 
              title="Finish the Mid Level Roadmap"
            />
            <Todo 
              title="Land a $150,000+ Job" 
            />
            <Todo 
              title="Complete the Certificate"
            />
            <Todo 
              title="Apply to Jobs"
            />
            <Todo 
              title="Finish Virtual Internship"
            />
            <Todo 
              title="Finish the Interviews"
            />
            <Todo 
              title="Finish the Coding Roadmap"
            />
          </div>
          {showModal && <Modal title="Are you sure you want to delete this element?"/>}
          {/* <Modal 
            title="Are you sure you want to add?"
          /> */}
        
        {/* <div>
          <h2>Finish Top Tech Roadmap</h2>
          <button>Delete</button>
        </div>
        <div>
          <h2>Complete Mid Roadmap</h2>
          <button>Delete</button>
        </div>
        <div>
          <h2>Land $150,000CAD Job</h2>
          <button>Delete</button>
        </div>
        <div>
          <h2>Finish Internship</h2>
          <button>Delete</button>
        </div>
        <div>
          <h2>Finish Interview Section</h2>
          <button>Delete</button>
        </div>
        <div>
          <h2>Finish Coding Roadmap</h2>
          <button>Delete</button>
        </div> */}
    </div>




  );
}

export default App;
