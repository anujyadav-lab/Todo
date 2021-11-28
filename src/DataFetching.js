//fetching data with useEffect
import React,{useState,useEffect} from "react"
import axios from 'axios'
export default function DataFetching(){
    const [post,setPost] =useState([])
    const [id, setId] = useState(1)
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)
    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
    
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
    return(
        <>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick = {handleClick}>Fetch post</button>

        <div>{post.title}</div>
        {/* <ul>
            {
                post.map(post=><li key={post.id}>{post.title}</li>)
            }
        </ul> */}
        </>
    )
}