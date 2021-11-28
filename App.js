import React, { useEffect } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TodoListItem from './Todo';


import { useState } from "react";
import { db } from './firebase_config';
import firebase from "firebase";

export default function App() {
    const [todos,setTodos] = useState([])
    const [todoInput, setTodoInput] = useState("")

useEffect(()=>{
getTodos();
},[])//blank to run only on first launch.


function getTodos(){
db.collection("todos").onSnapshot(function(querySnapshot){
setTodos(querySnapshot.docs.map((doc)=>({
    id:doc.id,
    todo: doc.data().todo,

    inprogess:doc.data().inprogess

}))
);
});
}


    function addTodo(e) {


        e.preventDefault();// to prevent reloading again and again.
        // console.log('You are tyring to add a todo ')

        db.collection("todos").add({
            inprogess:true,

            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

            todo:todoInput,
        });
            setTodoInput("")
        
    }
    return (


        <div className="App"

            style={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
            }}>


            <div>
                <h1> Anuj yadav Todo's App </h1>
                <form>
                    <TextField id="standard-basic"
                     label="Write s Todos" 
                     variant="standard"

                        value={todoInput}
                        onChange={(e) => setTodoInput(e.target.value)}
                         style={{ maxWidth: "400px", width: "30vw" }}
                          />

                    <Button 
                    type="submit"
                     variant="contained"
                      onClick={addTodo}
                      style={{display:"none"}}
                      >Default</Button>
                </form>
                {todos.map((todo)=>(
                    // <p>{todo.todo}</p>
                    <TodoListItem
                    todo={todo.todo}
                     inprogess={todo.inprogess} 
                     id={todo.id}
                     />
                ))}
            </div>
        </div>
    )
}
