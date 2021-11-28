import { Button, ListItem, ListItemText} from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import { db } from './firebase_config'
export default function TodoListItem({todo,inprogess,id}){
    function toggleInProgress(){
        db.collection("todos").doc(id).update({
            inprogess:!inprogess
        })
    }
    function deleteTodo(){
        db.collection("todos").doc(id).delete();
    }
    return(
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogess ? "Inprogess":"completed"}/>

            
                </ListItem>
                    {/* <p>{todo}</p> */}
                    <Button onClick={toggleInProgress}>{inprogess ? "Inprogess":"completed"}</Button>
                    <Button onClick={deleteTodo}>x</Button>


        </div>
    )
    }
    